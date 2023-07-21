import {
  CityDto,
  CountryDto,
  GeolocationRestControllerService,
  LgaDto,
  StateDto,
  StateRestControllerService,
} from '@safsims/generated';
import { apiWrapper } from '@safsims/utils/http-client';
import { SelectOptionType } from '@safsims/utils/types';
import useLoading from '@safsims/utils/useLoading/useLoading';
import { handleError } from '@safsims/utils/utils';
import { useEffect, useState } from 'react';

interface IProps {
  initialCountry?: any;
  initialState?: any;
  initialCity?: any;
  initialLga?: any;
}

const useGeoLocation = ({ initialCountry, initialState, initialCity, initialLga }: IProps) => {
  const { loading, startLoading, stopLoading } = useLoading();
  const [countries, setCountries] = useState<CountryDto[]>([]);
  const [states, setStates] = useState<StateDto[]>([]);
  const [lgas, setLgas] = useState<LgaDto[]>([]);
  const [cities, setCities] = useState<CityDto[]>([]);

  const [selectedCountry, setSelectedCountry] = useState<SelectOptionType>(initialCountry);
  const [selectedState, setSelectedState] = useState<SelectOptionType>(initialState);
  const [selectedLga, setSelectedLga] = useState<SelectOptionType>(initialLga);
  const [selectedCity, setSelectedCity] = useState<SelectOptionType>(initialCity);

  const getCountries = async () => {
    startLoading();
    try {
      const data = await apiWrapper(() => GeolocationRestControllerService.getCountriesUsingGet());
      setCountries(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  const getStates = async (countryCode: string) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        GeolocationRestControllerService.getCountryStatesUsingGet({
          countryCode,
        }),
      );
      setStates(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  const getCities = async (countryCode: string, stateId: string) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        GeolocationRestControllerService.getCitiesByCountryStateUsingGet({
          countryCode,
          stateId,
        }),
      );
      setCities(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  const getLgas = async (stateId: string) => {
    startLoading();
    try {
      const data = await apiWrapper(() =>
        StateRestControllerService.getLgasByStateUsingGet({
          stateId,
        }),
      );
      setLgas(data);
      stopLoading();
    } catch (error) {
      handleError(error);
      stopLoading();
    }
  };

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selectedCountry && selectedCountry.value) {
      getStates(selectedCountry.value.country_code!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState?.value && selectedCountry?.value) {
      if (selectedCountry.value.country_code === 'ng') {
        getLgas(selectedState.value.state_id!);
      }
      getCities(selectedCountry.value.country_code!, selectedState.value.state_id!);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedState, selectedCountry]);

  return {
    geolocationLoading: loading,
    selectedCountry,
    selectedState,
    setSelectedCountry,
    setSelectedState,
    states,
    countries,
    lgas,
    setLgas,
    selectedLga,
    setSelectedLga,
    selectedCity,
    setSelectedCity,
    cities,
  };
};

export default useGeoLocation;

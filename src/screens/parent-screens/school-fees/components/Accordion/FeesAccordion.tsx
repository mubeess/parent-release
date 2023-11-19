import { useTheme } from '@react-navigation/native';
import Avatar from '@safsims/components/Avatar/Avatar';
import Currency from '@safsims/components/Currency/Currency';
import useCurrentTermGet from '@safsims/general-hooks/useCurrentTermGet';
import { BasicStudentInfo, StudentTermInvoiceSummaryDto, TermDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Button from '../../../../../components/Button/Button';
import Text from '../../../../../components/Text/Text';

interface FeesAcordionProps {
  paidAmount?: number;
  discount?: number;
  outstandingAmount?: number;
  children: StudentTermInvoiceSummaryDto[];
  term: TermDto;
  navigation: any;
  hideButton?: boolean;
  handleOfflineRecord?: (
    students: (Partial<BasicStudentInfo> & {
      amount?: number;
    })[],
    termId: string,
  ) => void;
}

export default function FeesAccordion({
  term,
  discount = 0,
  outstandingAmount = 0,
  paidAmount = 0,
  children = [],
  navigation,
  hideButton,
  handleOfflineRecord,
}: FeesAcordionProps) {
  const { currentTerm } = useCurrentTermGet();
  const { colors } = useTheme();

  const heightValue = useSharedValue(235);
  const [buttonValue, setButtonValue] = useState('Expand');
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      maxHeight: heightValue.value,
    };
  });
  return (
    <Animated.View style={[styles.accordionContainer, reanimatedStyle]}>
      <View style={[styles.term]}>
        <View style={{ width: '70%' }}>
          <Text>{term?.term_id === currentTerm?.term_id && 'Current '}Term</Text>
          <Text h3>
            {
              // @ts-ignore
              term?.label
            }{' '}
            - {term?.session}
          </Text>
        </View>
        <Button
          onPress={() => {
            heightValue.value == 235
              ? ((heightValue.value = withTiming(Dimensions.get('window').height, {
                  duration: 500,
                })),
                setButtonValue('Collapse'))
              : ((heightValue.value = withTiming(235, { duration: 500 })),
                setButtonValue('Expand'));
          }}
          fontStyle={{ color: '#000' }}
          style={styles.button}
          label={buttonValue}
        />
      </View>

      <View style={[styles.paid]}>
        <View style={{ width: '30%' }}>
          {handleOfflineRecord ? (
            <Button
              pale
              label="Record Payment"
              onPress={() => {
                handleOfflineRecord?.(
                  children
                    .map((item) => ({
                      ...(item.invoice_summary?.student_info || {}),
                      amount: item.invoice_summary?.balance || 0,
                    }))
                    .filter((item) => item.amount > 0),
                  term?.term_id || '',
                );
              }}
            />
          ) : (
            <View />
          )}
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text>PAID</Text>
          <Text style={{ color: colors.PrimaryColor }} h3>
            {' '}
            <Currency amount={paidAmount} />{' '}
          </Text>
        </View>
      </View>

      <View style={styles.outStanding}>
        <View>
          <Text>DISCOUNT</Text>
          <Text h3>
            <Currency amount={discount} />
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={{ alignItems: 'flex-end' }}>
          <Text>OUTSTANDING </Text>
          <Text style={{ color: colors.PrimaryRed }} h3>
            <Currency amount={outstandingAmount} />
          </Text>
        </View>
      </View>

      <View style={styles.pay}>
        {!hideButton && (
          <Button
            onPress={() => {
              navigation.navigate('AllChildrenPayment', { term, defaultPaymentOpen: false });
            }}
            label="Make payment for all children"
          />
        )}
      </View>
      <ScrollView style={styles.children}>
        <View style={styles.note}>
          <Text>Tap on any child to open up their invoice</Text>
        </View>
        {children.length > 0 &&
          children.map((child, index) => (
            <TouchableOpacity
              onPress={() => {
                if ((child.invoice_summary?.balance || 0) <= 0) {
                  return;
                }
                navigation.navigate('ChildInvoice', {
                  id: child.invoice_summary?.student_info?.id,
                  termId: term?.term_id,
                  session: term?.session,
                });
              }}
              key={child.invoice_summary?.student_info?.id || index.toString()}
              style={styles.child}
            >
              <View style={styles.childDetail}>
                <View style={styles.avatar}>
                  {child.invoice_summary?.student_info?.profile_picture && (
                    <Avatar image={child.invoice_summary?.student_info?.profile_picture} />
                  )}
                  {/* {!child.avatar && (
                    <Icon name="user" size={30} color={colors.PrimaryGrey} />
                  )} */}
                </View>
                <Text>
                  {child.invoice_summary?.student_info?.first_name}{' '}
                  {child.invoice_summary?.student_info?.last_name}
                </Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text>OUTSTANDING</Text>
                <Text style={{ color: colors.PrimaryRed }} h3>
                  <Currency amount={child.invoice_summary?.balance} />
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: lightTheme.colors.PrimaryWhite,
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderRadius: 3,
    marginBottom: 20,
  },
  term: {
    height: 60,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    width: '30%',
    height: 40,
    backgroundColor: lightTheme.colors.PrimaryFadedBlue,
    borderColor: lightTheme.colors.PrimaryBorderColor,
    borderWidth: 1,
  },
  paid: {
    height: 70,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  outStanding: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  seperator: {
    height: '80%',
    backgroundColor: lightTheme.colors.PrimaryBorderColor,
    width: 1,
  },
  pay: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  note: {
    height: 50,
    backgroundColor: lightTheme.colors.PrimaryBackground,
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: {
    height: 'auto',
    backgroundColor: '#ffffff',
  },
  child: {
    width: '100%',
    height: 70,
    borderBottomColor: lightTheme.colors.PrimaryBorderColor,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  childDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 34,
    width: 34,
    backgroundColor: '#D9D9D9',
    borderRadius: 34,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    height: 34,
    width: 34,
    borderRadius: 34,
  },
});

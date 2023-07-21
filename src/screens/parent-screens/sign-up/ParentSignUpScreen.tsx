import { useTheme } from '@react-navigation/native';
import Button from '@safsims/components/Button/Button';
import Icon from '@safsims/components/Icon/Icon';
import Input from '@safsims/components/Input/Input';
import SafeAreaComponent from '@safsims/components/SafeAreaComponent/SafeAreaComponent';
import Select from '@safsims/components/Select/Select';
import useAllStudentsGet from '@safsims/general-hooks/useAllStudentsGet';
import useSchoolInfoGet from '@safsims/general-hooks/useSchoolInfoGet';
import { ParentStudentRelationshipRequest, StudentDto } from '@safsims/generated';
import { lightTheme } from '@safsims/utils/Theme';
import { SelectOptionType } from '@safsims/utils/types';
import useDisclosure from '@safsims/utils/useDisclosure/useDisclosure';
import { useMemo, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useParentSignup from './hooks/useParentSignup';
import Text from '@safsims/components/Text/Text';

interface IValues {
  phone: string;
  gender: 'FEMALE' | 'MALE' | undefined;
  first_name: string;
  last_name: string;
  email: string;
}

const ParentSignUpScreen = () => {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const { schoolLogo, schoolName, shortName, motto } = useSchoolInfoGet();

  const { students, loadingStudents, setSearchText, searchText } = useAllStudentsGet();

  const [linkedStudents, setLinkedStudents] = useState<ParentStudentRelationshipRequest[]>([]);

  const options = useMemo(
    () =>
      students.filter((item) => {
        const query = searchText.toLowerCase();
        return (
          (item.first_name?.toLowerCase()?.includes(query) ||
            item.surname?.toLowerCase()?.includes(query) ||
            item.other_names?.toLowerCase()?.includes(query) ||
            item.student_id?.toLowerCase()?.includes(query)) &&
          !!!linkedStudents.find((stud) => stud.student_id === item.id)
        );
      }),
    [students, searchText, linkedStudents],
  );

  const viewOptions =
    searchText.length && searchText.length >= 3
      ? options.map((student) => ({
          label: `${student.first_name} ${student.other_names} ${student.surname}`,
          subText: `${student.class_level_name || ''} ${student.arm_name || ''}`,
          value: student,
          icon: (
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: 0.2,
                borderColor: colors.PrimaryBorderColor,
              }}
              source={{ uri: student.profile_pic }}
            />
          ),
        }))
      : [];

  const { startSignUp, loading } = useParentSignup();

  const [selectedStudent, setSelectedStudent] = useState<any>(undefined);
  const [relationship, setRelationship] = useState<SelectOptionType>(null);

  const onRemove = (id: string) => {
    setLinkedStudents((prev) => prev.filter((student) => student.student_id !== id));
  };

  const addToList = () => {
    if (relationship && selectedStudent) {
      const child: StudentDto = selectedStudent?.label?.props?.value;
      const relationship_type = relationship?.value;
      const request: ParentStudentRelationshipRequest = {
        arm_name: child.arm_name,
        class_level_name: child.class_level_name,
        first_name: child.first_name,
        last_name: child.surname,
        relationship_type,
        student_id: child.id,
        student_school_id: child.student_id,
        profile_pic: child.profile_pic,
      };
      setLinkedStudents((prev) => [...prev, request]);
      setSelectedStudent(null);
      setRelationship(null);
    }
  };

  const initialValues = {
    phone: '',
    gender: undefined,
    first_name: '',
    last_name: '',
    email: '',
  };

  const [values, setValues] = useState<IValues>(initialValues);

  const disabled =
    !values.email ||
    !values.first_name ||
    !values.last_name ||
    !values.gender ||
    !values.phone ||
    (values.phone?.length || 0) < 6 ||
    !linkedStudents.length;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const reset = () => {
    setValues(initialValues);
    setLinkedStudents([]);
    setSelectedStudent(null);
    setRelationship(null);
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <SafeAreaComponent />
      <View style={[styles.container, { minHeight: height }]}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                borderWidth: 0.5,
                borderColor: colors.PrimaryBorderColor,
              }}
              source={{ uri: schoolLogo }}
            />
            <Text style={[styles.title]}>{schoolName}</Text>
            <Text style={[styles.subtitle]}>{motto}</Text>

            <Text style={[styles.title, styles.heading]}>Parent/Guardian Sign Up Form</Text>
            <Text style={[styles.subHeading]}>
              Sign up to have access to your children's information, performance report and a line
              of communication to the school
            </Text>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 25 }}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: colors.PrimaryBorderColor, zIndex: 1 },
              ]}
            >
              <Icon name="tag-user" size={28} />
            </View>
            <View
              style={[
                styles.spacer,
                { backgroundColor: colors.PrimaryBorderColor, marginTop: -20 },
              ]}
            />
          </View>

          <View style={{ marginBottom: 25 }}>
            <Text style={[styles.sectionHeading]}>Personal Information</Text>
            <Text style={{ color: colors.PrimaryGrey, textAlign: 'center' }}>
              Provide your personal and contact information
            </Text>
          </View>

          <View>
            <Input
              label="First name"
              placeholder="Enter first name"
              style={{ marginBottom: 15 }}
              required
              onChange={() => {}}
            />
            <Input
              label="Last name"
              placeholder="Enter last name"
              style={{ marginBottom: 15 }}
              required
              onChange={() => {}}
            />
            <Input
              label="Email address"
              style={{ marginBottom: 15 }}
              required
              placeholder="Enter email address"
              onChange={() => {}}
            />
            <Input
              label="Active Whatsapp Number"
              style={{ marginBottom: 15 }}
              required
              type="numeric"
              placeholder="Enter phone number"
              onChange={() => {}}
            />
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center', marginVertical: 25 }}>
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: colors.PrimaryBorderColor, zIndex: 1 },
              ]}
            >
              <Icon name="user-cirlce-add" size={28} />
            </View>
            <View
              style={[
                styles.spacer,
                { backgroundColor: colors.PrimaryBorderColor, marginTop: -20 },
              ]}
            />
          </View>

          <View style={{ marginBottom: 25 }}>
            <Text style={[styles.sectionHeading]}>Link your child(ren) to your account</Text>
            <Text style={{ color: colors.PrimaryGrey, textAlign: 'center' }}>
              Select your child(ren) in the school
            </Text>
          </View>

          <View>
            <Select
              style={{ marginBottom: 15 }}
              label="Select Child"
              subLabel="search a child. (type at least 3 characters)"
              inputValue={searchText}
              setInputValue={setSearchText}
              onChange={(e) => {
                setSelectedStudent(e);
              }}
              value={selectedStudent}
              isSearchable
              options={viewOptions}
              placeholder="Search by child's name"
            />
            <Select
              style={{ marginBottom: 20 }}
              label="Relationship"
              subLabel="select your relationship to the child"
              placeholder="Select relationship"
              value={relationship}
              onChange={(val) => setRelationship(val)}
              options={[
                {
                  label: 'Father',
                  value: 'FATHER',
                },
                {
                  label: 'Mother',
                  value: 'MOTHER',
                },
                {
                  label: 'Guardian',
                  value: 'GUARDIAN',
                },
              ]}
            />

            <Button
              onPress={() => addToList()}
              pale
              label="Add to list"
              IconLeft={<Icon name="profile-add" color="#FFF" />}
            />
          </View>

          <View style={{ marginVertical: 20 }}>
            {linkedStudents.map((student) => (
              <View key={student.student_id} style={[styles.studentContainer]}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 35,
                      borderWidth: 0.5,
                      borderColor: colors.PrimaryBorderColor,
                    }}
                    source={{ uri: student.profile_pic }}
                  />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, marginBottom: 5 }}>
                      {student.first_name} {student.last_name}
                    </Text>
                    <Text style={{ color: colors.PrimaryColor, marginBottom: 5 }}>
                      {student.student_id}
                    </Text>
                    <Text>
                      {student.class_level_name} {student.arm_name}{' '}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => onRemove(student.student_id || '')}>
                  <Icon name="close-circle" size={20} />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={{ marginVertical: 50 }}>
            <TouchableOpacity style={[styles.paleButton]}>
              <Text>Reset Form</Text>
            </TouchableOpacity>
            <Button label="Submit" />
          </View>

          <View style={[styles.footer]}>
            <Image
              style={{ marginBottom: 10 }}
              source={require('../../../../assets/logo-sm.png')}
            />
            <Text style={{ color: colors.PrimaryGrey, marginBottom: 5 }}>
              Powered by <Text style={{ fontWeight: 'bold' }}>SAFSIMS</Text>
            </Text>
            <Text style={{ color: colors.PrimaryGrey }}>
              Making learning and school administration easy
            </Text>
          </View>

          <View style={{ height: 50 }} />

          {/* <Pattern1
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 5,
              bottom: 0,
              zIndex: 0,
            }}
          /> */}
        </KeyboardAwareScrollView>
        <SafeAreaComponent />
      </View>
    </>
  );
};

export default ParentSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 5,
  },
  subHeading: {
    textAlign: 'center',
  },
  sectionHeading: {
    textAlign: 'center',
    marginTop: 20,
    zIndex: 1,
    fontWeight: '500',
    fontSize: 18,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 25,
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 1,
    width: '100%',
  },
  studentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: lightTheme.colors.PrimaryWhite,
    borderRadius: 5,
    padding: 10,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
  },
  paleButton: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
});

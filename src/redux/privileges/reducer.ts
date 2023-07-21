import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import privilegeActionTypes from './types';

export interface IPrivilegeState {
  staff_c?: boolean;
  staff_r?: boolean;
  staff_u?: boolean;
  staff_d?: boolean;
  staff_rp?: boolean;
  staffp_r?: boolean;
  staff_dd?: boolean;
  staff_pe?: boolean;

  student_c?: boolean;
  student_r?: boolean;
  student_u?: boolean;
  student_d?: boolean;
  studentp_r?: boolean;
  student_dd?: boolean;

  studentinv_r?: boolean;
  studentinv_u?: boolean;
  studentpay_u?: boolean;
  studentdsc_u?: boolean;
  studentpay_r?: boolean;
  studentinv_n?: boolean;

  class_level_c?: boolean;
  class_level_r?: boolean;
  class_level_u?: boolean;
  class_level_d?: boolean;

  arm_c?: boolean;
  arm_r?: boolean;
  arm_u?: boolean;
  arm_d?: boolean;

  parent_c?: boolean;
  parent_r?: boolean;
  parent_u?: boolean;
  parent_d?: boolean;
  parent_rp?: boolean;
  parentp_r?: boolean;

  fees_r?: boolean;
  fees_n?: boolean;
  fees_tl?: boolean;

  classes_r?: boolean;
  classes_ft?: boolean;
  classes_u?: boolean;

  subjectsp_r?: boolean;
  subjectsp_u?: boolean;
  subjects_r?: boolean;
  subjects_st?: boolean;

  results_ap?: boolean;
  results_r?: boolean;

  headteacher_x?: boolean;

  traits_r?: boolean;

  skills_r?: boolean;

  broadsheet_r?: boolean;
  broadsheet_ap?: boolean;

  settings_g?: boolean;
  settings_f?: boolean;
  settings_a?: boolean;
  settings_p?: boolean;

  feescit_r?: boolean;
  feescit_c?: boolean;
  feescit_a?: boolean;
  feescit_u?: boolean;
  feescit_d?: boolean;

  student_profile_r?: boolean;
  bulk_staff_c?: boolean;
  bulk_student_c?: boolean;
  staff_profile_r?: boolean;
  parent_profile_r?: boolean;

  users_r?: boolean;
  users_c?: boolean;
  users_u?: boolean;
  users_d?: boolean;

  roles_r?: boolean;
  roles_c?: boolean;
  roles_d?: boolean;
  roles_u?: boolean;

  invoice_template_r?: boolean;
  invoice_template_u?: boolean;
  invoice_template_c?: boolean;
  invoice_template_assign?: boolean;
  invoice_template_d?: boolean;

  payable_item_c?: boolean;
  payable_item_d?: boolean;
  payable_item_u?: boolean;
  payable_item_r?: boolean;

  bank_u?: boolean;
  bank_r?: boolean;
  bank_c?: boolean;
  bank_d?: boolean;

  account_dashboard_r?: boolean;
  class_payment_r?: boolean;

  student_invoice_profile_r?: boolean;
  student_invoice_u?: boolean;

  student_payment_receive?: boolean;
  payment_history_r?: boolean;

  part_payment_configure?: boolean;
  sessional_payment_configure?: boolean;

  student_account_profile_r?: boolean;
  student_payment_r?: boolean;
  student_discount_c?: boolean;
  student_receipt_r?: boolean;
  admin_profile_r?: boolean;
  manage_profile_edit_request?: boolean;
  isSuperAdmin?: boolean;
  isAdmin?: boolean;
  isDirector?: boolean;
}

const INITIAL_STATE = {
  // sms_send: false,
  // sms_r: false,
  // sms_report: false,
  // email_send: false,
  // email_r: false,
  // email_report: false,

  staff_c: false,
  staff_r: false,
  staff_u: false,
  staff_d: false,
  staff_rp: false,
  staffp_r: false,
  staff_dd: false,
  staff_pe: false,

  student_c: false,
  student_r: false,
  student_u: false,
  student_d: false,
  studentp_r: false,
  student_dd: false,

  studentinv_r: false,
  studentinv_u: false,
  studentpay_u: false,
  studentdsc_u: false,
  studentpay_r: false,
  studentinv_n: false,

  class_level_c: false,
  class_level_r: false,
  class_level_u: false,
  class_level_d: false,

  arm_c: false,
  arm_r: false,
  arm_u: false,
  arm_d: false,

  parent_c: false,
  parent_r: false,
  parent_u: false,
  parent_d: false,
  parent_rp: false,
  parentp_r: false,

  fees_r: false,
  fees_n: false,
  fees_tl: false,

  classes_r: false,
  classes_ft: false,
  classes_u: false,

  subjectsp_r: false,
  subjectsp_u: false,
  subjects_r: false,
  subjects_st: false,

  results_ap: false,
  results_r: false,

  headteacher_x: false,

  traits_r: false,

  skills_r: false,

  broadsheet_r: false,
  broadsheet_ap: false,

  settings_g: false,
  settings_f: false,
  settings_a: false,
  settings_p: false,

  feescit_r: false,
  feescit_c: false,
  feescit_a: false,
  feescit_u: false,
  feescit_d: false,

  student_profile_r: false,
  bulk_staff_c: false,
  bulk_student_c: false,
  staff_profile_r: false,
  parent_profile_r: false,

  users_r: false,
  users_c: false,
  users_u: false,
  users_d: false,

  roles_r: false,
  roles_c: false,
  roles_d: false,
  roles_u: false,

  invoice_template_r: false,
  invoice_template_u: false,
  invoice_template_c: false,
  invoice_template_assign: false,
  invoice_template_d: false,

  payable_item_c: false,
  payable_item_d: false,
  payable_item_u: false,
  payable_item_r: false,

  bank_u: false,
  bank_r: false,
  bank_c: false,
  bank_d: false,

  account_dashboard_r: false,
  class_payment_r: false,

  student_invoice_profile_r: false,
  student_invoice_u: false,

  student_payment_receive: false,
  payment_history_r: false,

  part_payment_configure: false,
  sessional_payment_configure: false,

  student_account_profile_r: false,
  student_payment_r: false,
  student_discount_c: false,
  student_receipt_r: false,
  admin_profile_r: false,
  manage_profile_edit_request: false,

  isSuperAdmin: false,
  isAdmin: false,
  isDirector: false,
};

interface IParam {
  type: privilegeActionTypes;
  payload: any;
}

function privilegeReducer(state: IPrivilegeState = INITIAL_STATE, { type, payload }: IParam) {
  switch (type) {
    case privilegeActionTypes.SMS_SEND_TRUE:
      return {
        ...state,
        sms_send: true,
      };
    case privilegeActionTypes.SMS_R_TRUE:
      return {
        ...state,
        sms_r: true,
      };
    case privilegeActionTypes.SMS_REPORT_TRUE:
      return {
        ...state,
        sms_report: true,
      };
    case privilegeActionTypes.EMAIL_SEND_TRUE:
      return {
        ...state,
        email_send: true,
      };
    case privilegeActionTypes.EMAIL_R_TRUE:
      return {
        ...state,
        email_r: true,
      };
    case privilegeActionTypes.EMAIL_REPORT_TRUE:
      return {
        ...state,
        email_report: true,
      };
    case privilegeActionTypes.STAFF_C_TRUE:
      return {
        ...state,
        staff_c: true,
      };
    case privilegeActionTypes.STAFF_R_TRUE:
      return {
        ...state,
        staff_r: true,
      };
    case privilegeActionTypes.STAFF_U_TRUE:
      return {
        ...state,
        staff_u: true,
      };
    case privilegeActionTypes.STAFF_D_TRUE:
      return {
        ...state,
        staff_d: true,
      };
    case privilegeActionTypes.STAFF_RP_TRUE:
      return {
        ...state,
        staff_rp: true,
      };
    case privilegeActionTypes.STAFFP_R_TRUE:
      return {
        ...state,
        staffp_r: true,
      };
    case privilegeActionTypes.STAFF_DD_TRUE:
      return {
        ...state,
        staff_dd: true,
      };
    case privilegeActionTypes.STAFF_PE_TRUE:
      return {
        ...state,
        staff_pe: true,
      };

    case privilegeActionTypes.STUDENT_C_TRUE:
      return {
        ...state,
        student_c: true,
      };
    case privilegeActionTypes.STUDENT_R_TRUE:
      return {
        ...state,
        student_r: true,
      };
    case privilegeActionTypes.STUDENT_U_TRUE:
      return {
        ...state,
        student_u: true,
      };
    case privilegeActionTypes.STUDENT_D_TRUE:
      return {
        ...state,
        student_d: true,
      };
    case privilegeActionTypes.STUDENTP_R_TRUE:
      return {
        ...state,
        studentp_r: true,
      };
    case privilegeActionTypes.STUDENT_DD_TRUE:
      return {
        ...state,
        student_dd: true,
      };

    case privilegeActionTypes.STUDENTINV_R_TRUE:
      return {
        ...state,
        studentinv_r: true,
      };
    case privilegeActionTypes.STUDENTINV_U_TRUE:
      return {
        ...state,
        studentinv_u: true,
      };
    case privilegeActionTypes.STUDENTPAY_U_TRUE:
      return {
        ...state,
        studentpay_u: true,
      };
    case privilegeActionTypes.STUDENTPAY_R_TRUE:
      return {
        ...state,
        studentpay_r: true,
      };

    case privilegeActionTypes.STUDENTDSC_U_TRUE:
      return {
        ...state,
        studentdsc_u: true,
      };
    case privilegeActionTypes.STUDENTINV_N_TRUE:
      return {
        ...state,
        studentinv_n: true,
      };

    case privilegeActionTypes.CLASS_LEVEL_C_TRUE:
      return {
        ...state,
        class_level_c: true,
      };
    case privilegeActionTypes.CLASS_LEVEL_R_TRUE:
      return {
        ...state,
        class_level_r: true,
      };
    case privilegeActionTypes.CLASS_LEVEL_U_TRUE:
      return {
        ...state,
        class_level_u: true,
      };
    case privilegeActionTypes.CLASS_LEVEL_D_TRUE:
      return {
        ...state,
        class_level_d: true,
      };
    case privilegeActionTypes.ARM_C_TRUE:
      return {
        ...state,
        arm_c: true,
      };
    case privilegeActionTypes.ARM_R_TRUE:
      return {
        ...state,
        arm_r: true,
      };
    case privilegeActionTypes.ARM_U_TRUE:
      return {
        ...state,
        arm_u: true,
      };
    case privilegeActionTypes.ARM_D_TRUE:
      return {
        ...state,
        arm_d: true,
      };
    case privilegeActionTypes.PARENT_C_TRUE:
      return {
        ...state,
        parent_c: true,
      };
    case privilegeActionTypes.PARENT_R_TRUE:
      return {
        ...state,
        parent_r: true,
      };
    case privilegeActionTypes.PARENT_U_TRUE:
      return {
        ...state,
        parent_u: true,
      };
    case privilegeActionTypes.PARENT_D_TRUE:
      return {
        ...state,
        parent_d: true,
      };
    case privilegeActionTypes.PARENT_RP_TRUE:
      return {
        ...state,
        parent_rp: true,
      };
    case privilegeActionTypes.PARENTP_R_TRUE:
      return {
        ...state,
        parentp_r: true,
      };

    case privilegeActionTypes.FEES_R_TRUE:
      return {
        ...state,
        fees_r: true,
      };
    case privilegeActionTypes.FEES_N_TRUE:
      return {
        ...state,
        fees_n: true,
      };
    case privilegeActionTypes.FEES_TL_TRUE:
      return {
        ...state,
        fees_tl: true,
      };

    case privilegeActionTypes.CLASSES_R_TRUE:
      return {
        ...state,
        classes_r: true,
      };
    case privilegeActionTypes.CLASSES_FT_TRUE:
      return {
        ...state,
        classes_ft: true,
      };
    case privilegeActionTypes.CLASSES_U_TRUE:
      return {
        ...state,
        classes_u: true,
      };

    case privilegeActionTypes.SUBJECTSP_R_TRUE:
      return {
        ...state,
        subjectsp_r: true,
      };
    case privilegeActionTypes.SUBJECTSP_U_TRUE:
      return {
        ...state,
        subjectsp_u: true,
      };
    case privilegeActionTypes.SUBJECTS_R_TRUE:
      return {
        ...state,
        subjects_r: true,
      };
    case privilegeActionTypes.SUBJECTS_ST_TRUE:
      return {
        ...state,
        subjects_st: true,
      };

    case privilegeActionTypes.RESULTS_AP_TRUE:
      return {
        ...state,
        results_ap: true,
      };
    case privilegeActionTypes.RESULTS_R_TRUE:
      return {
        ...state,
        results_r: true,
      };

    case privilegeActionTypes.HEADTEACHER_X_TRUE:
      return {
        ...state,
        headteacher_x: true,
      };

    case privilegeActionTypes.TRAITS_R_TRUE:
      return {
        ...state,
        traits_r: true,
      };

    case privilegeActionTypes.SKILLS_R_TRUE:
      return {
        ...state,
        skills_r: true,
      };

    case privilegeActionTypes.BROADSHEET_R_TRUE:
      return {
        ...state,
        broadsheet_r: true,
      };
    case privilegeActionTypes.BROADSHEET_AP_TRUE:
      return {
        ...state,
        broadsheet_ap: true,
      };

    case privilegeActionTypes.SETTINGS_G_TRUE:
      return {
        ...state,
        settings_g: true,
      };
    case privilegeActionTypes.SETTINGS_F_TRUE:
      return {
        ...state,
        settings_f: true,
      };
    case privilegeActionTypes.SETTINGS_A_TRUE:
      return {
        ...state,
        settings_a: true,
      };
    case privilegeActionTypes.SETTINGS_P_TRUE:
      return {
        ...state,
        settings_p: true,
      };

    case privilegeActionTypes.FEESCIT_R_TRUE:
      return {
        ...state,
        feescit_r: true,
      };
    case privilegeActionTypes.FEESCIT_C_TRUE:
      return {
        ...state,
        feescit_c: true,
      };
    case privilegeActionTypes.FEESCIT_A_TRUE:
      return {
        ...state,
        feescit_a: true,
      };
    case privilegeActionTypes.FEESCIT_U_TRUE:
      return {
        ...state,
        feescit_u: true,
      };
    case privilegeActionTypes.FEESCIT_D_TRUE:
      return {
        ...state,
        feescit_d: true,
      };

    case privilegeActionTypes.STUDENT_PROFILE_R_TRUE:
      return {
        ...state,
        student_profile_r: true,
      };
    case privilegeActionTypes.BULK_STAFF_C_TRUE:
      return {
        ...state,
        bulk_staff_c: true,
      };
    case privilegeActionTypes.BULK_STUDENT_C_TRUE:
      return {
        ...state,
        bulk_student_c: true,
      };
    case privilegeActionTypes.STAFF_PROFILE_R_TRUE:
      return {
        ...state,
        staff_profile_r: true,
      };
    case privilegeActionTypes.PARENT_PROFILE_R_TRUE:
      return {
        ...state,
        parent_profile_r: true,
      };
    case privilegeActionTypes.USERS_R_TRUE:
      return {
        ...state,
        users_r: true,
      };
    case privilegeActionTypes.USERS_C_TRUE:
      return {
        ...state,
        users_c: true,
      };
    case privilegeActionTypes.USERS_U_TRUE:
      return {
        ...state,
        users_u: true,
      };
    case privilegeActionTypes.USERS_D_TRUE:
      return {
        ...state,
        users_d: true,
      };
    case privilegeActionTypes.ROLES_R_TRUE:
      return {
        ...state,
        roles_r: true,
      };
    case privilegeActionTypes.ROLES_C_TRUE:
      return {
        ...state,
        roles_c: true,
      };
    case privilegeActionTypes.ROLES_D_TRUE:
      return {
        ...state,
        roles_d: true,
      };
    case privilegeActionTypes.ROLES_U_TRUE:
      return {
        ...state,
        roles_u: true,
      };
    case privilegeActionTypes.INVOICE_TEMPLATE_R_TRUE:
      return {
        ...state,
        invoice_template_r: true,
      };
    case privilegeActionTypes.INVOICE_TEMPLATE_U_TRUE:
      return {
        ...state,
        invoice_template_u: true,
      };
    case privilegeActionTypes.INVOICE_TEMPLATE_C_TRUE:
      return {
        ...state,
        invoice_template_c: true,
      };
    case privilegeActionTypes.INVOICE_TEMPLATE_ASSIGN_TRUE:
      return {
        ...state,
        invoice_template_assign: true,
      };
    case privilegeActionTypes.INVOICE_TEMPLATE_D_TRUE:
      return {
        ...state,
        invoice_template_d: true,
      };
    case privilegeActionTypes.PAYABLE_ITEM_C_TRUE:
      return {
        ...state,
        payable_item_c: true,
      };
    case privilegeActionTypes.PAYABLE_ITEM_D_TRUE:
      return {
        ...state,
        payable_item_d: true,
      };
    case privilegeActionTypes.PAYABLE_ITEM_U_TRUE:
      return {
        ...state,
        payable_item_u: true,
      };
    case privilegeActionTypes.PAYABLE_ITEM_R_TRUE:
      return {
        ...state,
        payable_item_r: true,
      };
    case privilegeActionTypes.BANK_U_TRUE:
      return {
        ...state,
        bank_u: true,
      };
    case privilegeActionTypes.BANK_R_TRUE:
      return {
        ...state,
        bank_r: true,
      };
    case privilegeActionTypes.BANK_C_TRUE:
      return {
        ...state,
        bank_c: true,
      };
    case privilegeActionTypes.BANK_D_TRUE:
      return {
        ...state,
        bank_d: true,
      };
    case privilegeActionTypes.ACCOUNT_DASHBOARD_R_TRUE:
      return {
        ...state,
        account_dashboard_r: true,
      };
    case privilegeActionTypes.CLASS_PAYMENT_R_TRUE:
      return {
        ...state,
        class_payment_r: true,
      };
    case privilegeActionTypes.STUDENT_INVOICE_U_TRUE:
      return {
        ...state,
        student_invoice_u: true,
      };
    case privilegeActionTypes.STUDENT_INVOICE_PROFILE_R_TRUE:
      return {
        ...state,
        student_invoice_profile_r: true,
      };
    case privilegeActionTypes.STUDENT_PAYMENT_RECEIVE_TRUE:
      return {
        ...state,
        student_payment_receive: true,
      };
    case privilegeActionTypes.PAYMENT_HISTORY_R_TRUE:
      return {
        ...state,
        payment_history_r: true,
      };
    case privilegeActionTypes.PART_PAYMENT_CONFIGURE_TRUE:
      return {
        ...state,
        part_payment_configure: true,
      };
    case privilegeActionTypes.SESSIONAL_PAYMENT_CONFIGURE_TRUE:
      return {
        ...state,
        sessional_payment_configure: true,
      };
    case privilegeActionTypes.STUDENT_ACCOUNT_PROFILE_R_TRUE:
      return {
        ...state,
        student_account_profile_r: true,
      };
    case privilegeActionTypes.STUDENT_PAYMENT_R_TRUE:
      return {
        ...state,
        student_payment_r: true,
      };
    case privilegeActionTypes.STUDENT_DISCOUNT_C_TRUE:
      return {
        ...state,
        student_discount_c: true,
      };
    case privilegeActionTypes.STUDENT_RECEIPT_R_TRUE:
      return {
        ...state,
        student_receipt_r: true,
      };
    case privilegeActionTypes.ADMIN_PROFILE_R_TRUE:
      return {
        ...state,
        admin_profile_r: true,
      };
    case privilegeActionTypes.MANAGE_PROFILE_EDIT_REQUEST_TRUE:
      return {
        ...state,
        manage_profile_edit_request: true,
      };
    case privilegeActionTypes.SUPER_ADMIN:
      return {
        ...state,
        super_admin: payload,
      };
    case privilegeActionTypes.UPDATE_APP_PRIVILEGE_STATE:
      return {
        ...state,
        ...payload,
      };
    case privilegeActionTypes.CLEAR_ALL_PRIVILEGES:
      return INITIAL_STATE;
    default:
      return state;
  }
}

const persistConfig = {
  key: 'privileges',
  storage: AsyncStorage,
  blacklist: [],
};

export default persistReducer(persistConfig, privilegeReducer);

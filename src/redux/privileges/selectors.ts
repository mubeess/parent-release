import { createSelector } from 'reselect';

export const selectPrivileges = (state) => state.privileges;

export const select_ns_sms_send = createSelector(
  [selectPrivileges],
  (privilege) => privilege.sms_send,
);

export const select_ns_sms_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.sms_r,
);

export const select_ns_sms_report = createSelector(
  [selectPrivileges],
  (privilege) => privilege.sms_report,
);

export const select_ns_email_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.email_r,
);

export const select_ns_email_report = createSelector(
  [selectPrivileges],
  (privilege) => privilege.email_report,
);

export const select_ns_email_send = createSelector(
  [selectPrivileges],
  (privilege) => privilege.email_send,
);

export const select_safsims_student_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_r,
);

export const select_safsims_view_student_profile = createSelector(
  [selectPrivileges],
  (privilege) => privilege.view_student_profile,
);

export const select_safsims_student_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_c,
);

export const select_safsims_student_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_u,
);

export const select_safsims_student_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_d,
);

export const select_safsims_student_profile_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentp_r,
);

export const select_safsims_student_delete_document = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_dd,
);

export const select_safsims_student_invoice_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentinv_r,
);

export const select_safsims_student_invoice_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentinv_u,
);

export const select_safsims_student_invoice_notification = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentinv_n,
);

export const select_safsims_student_payment_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentpay_u,
);

export const select_safsims_student_payment_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentpay_r,
);

export const select_safsims_student_discount_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentdsc_u,
);

export const select_safsims_parent_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_c,
);

export const select_safsims_parent_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_r,
);

export const select_safsims_parent_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_u,
);

export const select_safsims_parent_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_d,
);

export const select_safsims_parent_reset_password = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_rp,
);

export const select_safsims_parent_link_children = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_u,
);

export const select_safsims_parent_activate = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parent_u,
);

export const select_safsims_parent_profile_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parentp_r,
);

export const select_safsims_fees_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.fees_r,
);

export const select_safsims_fees_notifications = createSelector(
  [selectPrivileges],
  (privilege) => privilege.fees_n,
);

export const select_safsims_fees_transactions_log = createSelector(
  [selectPrivileges],
  (privilege) => privilege.fees_tl,
);

export const select_safsims_classes_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.classes_r,
);

export const select_safsims_classes_assign_form_teacher = createSelector(
  [selectPrivileges],
  (privilege) => privilege.classes_ft,
);

export const select_safsims_classes_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.classes_u,
);

export const select_safsims_subjects_profile_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.subjectsp_r,
);

export const select_safsims_subjects_profile_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.subjectsp_u,
);

export const select_safsims_subjects_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.subjects_r,
);

export const select_safsims_subjects_assign_subject_teacher = createSelector(
  [selectPrivileges],
  (privilege) => privilege.subjects_st,
);

export const select_safsims_results_approval = createSelector(
  [selectPrivileges],
  (privilege) => privilege.results_ap,
);

export const select_safsims_results_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.results_r,
);

export const select_safsims_headteacher_exclusive = createSelector(
  [selectPrivileges],
  (privilege) => privilege.headteacher_x,
);

export const select_safsims_traits_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.traits_r,
);

export const select_safsims_skills_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.skills_r,
);

export const select_safsims_broadsheet_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.broadsheet_r,
);

export const select_safsims_skills_broadsheet_approval = createSelector(
  [selectPrivileges],
  (privilege) => privilege.broadsheet_ap,
);

export const select_safsims_settings_general = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_g,
);
export const select_safsims_settings_fees = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_f,
);
export const select_safsims_settings_academic = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_a,
);
export const select_safsims_settings_plans = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_p,
);

export const select_safsims_fees_invoice_template_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.feescit_r,
);

export const select_safsims_fees_invoice_template_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.feescit_c,
);

export const select_safsims_fees_invoice_template_apply = createSelector(
  [selectPrivileges],
  (privilege) => privilege.feescit_a,
);

export const select_safsims_fees_invoice_template_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.feescit_u,
);

export const select_safsims_fees_invoice_template_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.feescit_d,
);

export const select_safsims_staff_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_c,
);

export const select_safsims_staff_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_r,
);

export const select_safsims_staff_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_u,
);

export const select_safsims_staff_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_d,
);

export const select_safsims_staff_reset_password = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_rp,
);

export const select_safsims_staff_profile_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staffp_r,
);

export const select_safsims_staff_delete_document = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_dd,
);

export const select_safsims_staff_profile_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_pe,
);

export const select_safsims_classlevel_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.class_level_c,
);

export const select_safsims_classlevel_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.class_level_r,
);

export const select_safsims_classlevel_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.class_level_u,
);

export const select_safsims_classlevel_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.class_level_d,
);

export const select_safsims_arm_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_g,
);

export const select_safsims_arm_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_g,
);

export const select_safsims_arm_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_g,
);

export const select_safsims_arm_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.settings_g,
);

export const select_safsims_create_bulk_student = createSelector(
  [selectPrivileges],
  (privilege) => privilege.bulk_student_c,
);

export const select_safsims_view_parent_profile = createSelector(
  [selectPrivileges],
  (privilege) => privilege.parentp_r,
);

export const select_safsims_users_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.users_r,
);

export const select_safsims_users_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.users_c,
);

export const select_safsims_users_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.users_u,
);

export const select_safsims_users_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.users_d,
);

export const select_safsims_roles_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.roles_r,
);

export const select_safsims_roles_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.roles_c,
);

export const select_safsims_roles_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.roles_d,
);

export const select_safsims_roles_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.roles_u,
);

export const select_safsims_invoice_template_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.invoice_template_r,
);

export const select_safsims_invoice_template_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.invoice_template_u,
);

export const select_safsims_invoice_template_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.invoice_template_c,
);

export const select_safsims_invoice_template_assign = createSelector(
  [selectPrivileges],
  (privilege) => privilege.invoice_template_assign,
);

export const select_safsims_invoice_template_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.invoice_template_d,
);

export const select_safsims_payable_item_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.payable_item_c,
);

export const select_safsims_payable_item_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.payable_item_d,
);

export const select_safsims_payable_item_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.payable_item_u,
);

export const select_safsims_payable_item_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.payable_item_r,
);

export const select_safsims_bank_edit = createSelector(
  [selectPrivileges],
  (privilege) => privilege.bank_u,
);

export const select_safsims_bank_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.bank_r,
);

export const select_safsims_bank_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.bank_c,
);

export const select_safsims_bank_delete = createSelector(
  [selectPrivileges],
  (privilege) => privilege.bank_d,
);

export const select_safsims_account_dashboard_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.account_dashboard_r,
);

export const select_safsims_class_payment_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.class_payment_r,
);

export const select_safsims_student_invoice_profile_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_invoice_profile_r,
);

export const select_safsims_student_payment_receive = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentpay_u,
);

export const select_safsims_payment_history_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.payment_history_r,
);

export const select_safsims_part_payment_configure = createSelector(
  [selectPrivileges],
  (privilege) => privilege.part_payment_configure,
);

export const select_safsims_sessional_payment_configure = createSelector(
  [selectPrivileges],
  (privilege) => privilege.sessional_payment_configure,
);

export const select_safsims_student_account_profile_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.student_account_profile_r,
);

export const select_safsims_student_discount_create = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentdsc_u,
);

export const select_safsims_student_receipt_view = createSelector(
  [selectPrivileges],
  (privilege) => privilege.studentpay_r,
);

export const select_safsims_admin_profile_r = createSelector(
  [selectPrivileges],
  (privilege) => privilege.admin_profile_r,
);

export const select_safsims_manage_profile_edit_request = createSelector(
  [selectPrivileges],
  (privilege) => privilege.staff_u,
);

export const select_super_admin = createSelector(
  [selectPrivileges],
  (privilege) => privilege.super_admin,
);

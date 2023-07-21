/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssignClassSubjectsRequest } from '../models/AssignClassSubjectsRequest';
import type { AssignSubjectsToTeacherRequest } from '../models/AssignSubjectsToTeacherRequest';
import type { AssignSubjectTeachersRequest } from '../models/AssignSubjectTeachersRequest';
import type { CreateSubjectRequest } from '../models/CreateSubjectRequest';
import type { DeleteSubjectRequest } from '../models/DeleteSubjectRequest';
import type { Page_SubjectDto_ } from '../models/Page_SubjectDto_';
import type { SubjectDto } from '../models/SubjectDto';
import type { SubjectTeacherDto } from '../models/SubjectTeacherDto';
import type { UpdateSubjectRequest } from '../models/UpdateSubjectRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubjectRestControllerService {
  /**
   * getAllSubjects
   * @returns SubjectDto OK
   * @throws ApiError
   */
  public static getAllSubjectsUsingGet({
    search,
  }: {
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Array<SubjectDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subjects',
      query: {
        search: search,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * createSubject
   * @returns SubjectDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static createSubjectUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: CreateSubjectRequest;
  }): CancelablePromise<SubjectDto | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/subjects',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateSubject
   * @returns SubjectDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateSubjectUsingPut({
    request,
  }: {
    /**
     * request
     */
    request: UpdateSubjectRequest;
  }): CancelablePromise<SubjectDto | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/subjects',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getAllSubjects
   * @returns Page_SubjectDto_ OK
   * @throws ApiError
   */
  public static getAllSubjectsUsingGet1({
    limit,
    offset,
    search,
  }: {
    limit?: number;
    offset?: number;
    /**
     * search
     */
    search?: string;
  }): CancelablePromise<Page_SubjectDto_> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subjects/all-subjects',
      query: {
        limit: limit,
        offset: offset,
        search: search,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * bulkDeleteSubject
   * @returns any OK
   * @throws ApiError
   */
  public static bulkDeleteSubjectUsingDelete({
    request,
  }: {
    /**
     * request
     */
    request: DeleteSubjectRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/subjects/bulk',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }

  /**
   * getClassSubjects
   * @returns SubjectDto OK
   * @throws ApiError
   */
  public static getClassSubjectsUsingGet({
    classLevelId,
    armId,
    termId,
  }: {
    /**
     * class-level-id
     */
    classLevelId: string;
    /**
     * arm-id
     */
    armId?: string;
    /**
     * term-id
     */
    termId?: string;
  }): CancelablePromise<Array<SubjectDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subjects/class-level',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * assignClassSubjects
   * @returns any OK
   * @throws ApiError
   */
  public static assignClassSubjectsUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: AssignClassSubjectsRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/subjects/class-level',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * removeClassSubjects
   * @returns any OK
   * @throws ApiError
   */
  public static removeClassSubjectsUsingPut({
    request,
  }: {
    /**
     * request
     */
    request: AssignClassSubjectsRequest;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/subjects/class-level',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getFilteredSubjectsByTeacher
   * @returns SubjectDto OK
   * @throws ApiError
   */
  public static getFilteredSubjectsByTeacherUsingGet({
    armId,
    classLevelId,
    staffId,
    termId,
  }: {
    /**
     * arm-id
     */
    armId?: string;
    /**
     * class-level-id
     */
    classLevelId?: string;
    /**
     * staff-id
     */
    staffId?: string;
    /**
     * term-id
     */
    termId?: string;
  }): CancelablePromise<Array<SubjectDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subjects/filter',
      query: {
        'arm-id': armId,
        'class-level-id': classLevelId,
        'staff-id': staffId,
        'term-id': termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * assignSubjectsToTeacher
   * @returns SubjectTeacherDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static assignSubjectsToTeacherUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: AssignSubjectsToTeacherRequest;
  }): CancelablePromise<Array<SubjectTeacherDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/subjects/multiple/teacher',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateAssignedSubjectsToTeacher
   * @returns SubjectTeacherDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateAssignedSubjectsToTeacherUsingPut({
    request,
  }: {
    /**
     * request
     */
    request: AssignSubjectsToTeacherRequest;
  }): CancelablePromise<Array<SubjectTeacherDto> | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/subjects/multiple/teacher',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getSubjectTeachers
   * @returns SubjectTeacherDto OK
   * @throws ApiError
   */
  public static getSubjectTeachersUsingGet({
    armId,
    classLevelId,
    subjectId,
    termId,
  }: {
    armId?: string;
    classLevelId?: string;
    subjectId?: string;
    termId?: string;
  }): CancelablePromise<Array<SubjectTeacherDto>> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subjects/teacher',
      query: {
        armId: armId,
        classLevelId: classLevelId,
        subjectId: subjectId,
        termId: termId,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * assignSubjectTeachers
   * @returns SubjectTeacherDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static assignSubjectTeachersUsingPost({
    request,
  }: {
    /**
     * request
     */
    request: AssignSubjectTeachersRequest;
  }): CancelablePromise<Array<SubjectTeacherDto> | any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/subjects/teacher',
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * updateSubjectTeachers
   * @returns SubjectTeacherDto OK
   * @returns any Created
   * @throws ApiError
   */
  public static updateSubjectTeachersUsingPut({
    requests,
  }: {
    /**
     * requests
     */
    requests: Array<AssignSubjectTeachersRequest>;
  }): CancelablePromise<Array<SubjectTeacherDto> | any> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/subjects/teacher',
      body: requests,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * getSubject
   * @returns SubjectDto OK
   * @throws ApiError
   */
  public static getSubjectUsingGet({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<SubjectDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/subjects/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Not Found`,
      },
    });
  }

  /**
   * deleteSubject
   * @returns any OK
   * @throws ApiError
   */
  public static deleteSubjectUsingDelete({
    id,
  }: {
    /**
     * id
     */
    id: string;
  }): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/subjects/{id}',
      path: {
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
      },
    });
  }
}

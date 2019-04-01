import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        data: action.users.listOfUser
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };

    case userConstants.UPDATE_USER_STATUS_SUCCESS:
      return {
        isUpdate: true,
        items: state.items,
        total: state.total
      };
    case userConstants.UPDATE_USER_STATUS_FAILURE:
      return {
        error: action.error
      };

    case userConstants.GETALL_REQUEST_NOTIFICATION:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS_NOTIFICATION:
      return {
        notificationitems: action.users.listNotification.list,
        notificationtotal: action.users.listNotification.total
      };
    case userConstants.GETALL_FAILURE_NOTIFICATION:
      return {
        error: action.error
      };

    case userConstants.GETALL_REQUEST_CONTACT:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS_CONTACT:
      return {
        contactitems: action.users.listCONTACT.list,
        contacttotal: action.users.listCONTACT.total
      };
    case userConstants.GETALL_FAILURE_CONTACT:
      return {
        error: action.error
      };

    case userConstants.REQUEST_INFO_USER_INFO:
      return {
        userInfo: state.userInfo,
        loading: true
      };
    case userConstants.SUCCESS_INFO_USER_INFO:
      return {
        userInfo: action.users.userInfo
      };
    case userConstants.FAILURE_INFO_USER_INFO:
      return {
        error: action.error
      };

    case userConstants.UPDATE_KYC_REQUEST:
      return {
        userInfo: state.userInfo,
        loading: true
      };
    case userConstants.UPDATE_KYC_SUCCESS:
      return {
        userInfo: state.userInfo,
        kycStatusUpdate:true
      };
    case userConstants.UPDATE_KYC_FAILURE:
      return {
        error: action.error
      };

    case userConstants.UPDATE_DETAILS_REQUEST:
      return {
        userInfo: state.userInfo,
        loading: true
      };
    case userConstants.UPDATE_DETAILS_SUCCESS:
      return {
        userInfo: state.userInfo,
        detailsUpdate:true
      };
    case userConstants.UPDATE_DETAILS_FAILURE:
      return {
        error: action.error
      };

    case userConstants.CHANGE_PASSWORD_REQUEST:
      return {
        loading: true
      };
    case userConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        isPasswordChange:true
      };
    case userConstants.CHANGE_PASSWORD_FAILURE:
      return {
        error: action.error
      };

    default:
      return state
  }
}
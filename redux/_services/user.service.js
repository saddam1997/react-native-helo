
import { CONST } from '../_config';

export const userService = {
        login,
        getAll,
    // updateUserStatus,
    // getAllNotification,
    // getAllCONTACT,
    // getAllInfo,
    // udpateUserKYC,
    // udpateUserDetails,
    // changePassword
};

function login(username, password) {
    let header = new Headers({
        'Content-Type': 'application/json'
    });
    const requestOptions = {
        method: 'POST',
        headers: header,
        body: JSON.stringify({ username: username, password: password })
    };
    return fetch(CONST.BACKEND_URL + `/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            if (user.data.token) {
                
            }
            return user;
        });
}


function getAll() {
    let header = new Headers({
        'Content-Type': 'application/json',
        //"Authorization": authHeader().Authorization
    });
    const requestOptions = {
        method: "GET",
        headers: header
    }
    return fetch(`http://www.mocky.io/v2/5ca6e999340000d02e76b1c7`, requestOptions)
        .then(handleResponse)
        .then(data => {
            console.log("data.datadata.datadata.data ",data.articles.length);
            
            let userObj = {
                newAPIArtical: data.articles
            }
            return userObj;
        });
}

// function getAllNotification(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/getnotification`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 listNotification: data.data
//             }
//             return userObj;
//         });
// }

// function getAllInfo(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/getuserinfo`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 userInfo: data.data
//             }
//             return userObj;
//         });
// }

// function getAllCONTACT(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/getcontactus`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 listCONTACT: data.data
//             }
//             return userObj;
//         });
// }

// function updateUserStatus(data) {
//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/updateuserstatus`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 updatedata: data
//             }
//             return userObj;
//         });
// }

// function udpateUserKYC(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/updatekycstatus`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 updatekyc: data
//             }
//             return userObj;
//         });
// }

// function changePassword(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/changepassword`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             return data;
//         });
// }

// function udpateUserDetails(data) {

//     let header = new Headers({
//         'Content-Type': 'application/json',
//         "Authorization": authHeader().Authorization
//     });
//     const requestOptions = {
//         method: "POST",
//         headers: header,
//         body: JSON.stringify(data)
//     }
//     return fetch(CONST.BACKEND_URL + `/api/updateuserinfo`, requestOptions)
//         .then(handleResponse)
//         .then(data => {
//             let userObj = {
//                 updatekyc: data
//             }
//             return userObj;
//         });
// }


function handleResponse(response) {
   // console.log("response22222   ");

    return response.text().then(text => {
       // console.log("texttexttext ",text);
        
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
               
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        //console.log("datadatadatadatadata   ", data.error);
        if (data.error) {
            console.log("datadatadatadatadata   ", data.error);
            const error = (data && data.msg) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}
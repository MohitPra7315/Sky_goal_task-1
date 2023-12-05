// 1st  Routes 
// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

"http://localhost:5000/api/v1/auth/sendotp"  //  <<<===  check Api from here for  SendOTp
"http://localhost:5000/api/v1/auth/signup"  //<<==== check Api from here for  Signup  ==>>

"http://localhost:5000/api/v1/auth/sendotp  "  //  <<==----- check Api from here for Login ==>> 


// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

"http://localhost:5000/api/v1/profile/reset-password-token"  //    ===>>> check Api from this URl ==>>

" http://localhost:5000/api/v1/profile/reset-password"    //  ===>>> check Api from here  URl ==>>


// 2rd Routes 
// ********************************************************************************************************
//                                      Profile routes
// ********************************************************************************************************

"http://localhost:5000/api/v1/profile/updateProfile"  //<<<<===--- check Api from here for  Update user aadditional details 

"http://localhost:5000/api/v1/profile/deleteProfile"  //<<<<===--- check Api from here for  delete user account only for Student from database   

"http://localhost:5000/api/v1/profile/getUserDetails"  //<<<<===--- check Api from here for   get user Full Details 

"http://localhost:5000/api/v1/profile/updateDisplayPicture" //<<<==-- check Api From Here for  Update Profile Image  ||Display Image 



// 3rd Routes

// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************
// Category can Only be Created by Admin


"http://localhost:7000/api/v1/course/createCategory"  //<<<++-- check Api for Created Category By only Admin

"http://localhost:7000/api/v1/course/showAllCategories"  //<<<++-- check Api forgetAllCourse

"http://localhost:7000/api/v1/course/getCategoryPageDetails"  //<<<++-- check Api for show Category full details as Mosdel


// ********************************************************************************************************
//                                      Course routes
// ********************************************************************************************************

"http://localhost:7000/api/v1/course/createCourse"  //<<<++-- check Api for Create Course  on Category By only Instructor

"http://localhost:7000/api/v1/course/getAllCourse"  //<<<++-- check Api for show AllCourses

"http://localhost:7000/api/v1/course/getCourseDetails"  //<<<++-- check Api for show Course  full details as Model


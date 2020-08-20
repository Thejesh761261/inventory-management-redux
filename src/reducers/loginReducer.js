const loginReducer =(state=null,action)=>{

    var login = [
        {
            "id": 1,
            "email": "thejesh@gmail.com",
            "password": "ths",
            "name": "Thejesh K",
            "dob": "12-07-2017",
            "phone": "9897656789"
          },
          {
            "email": "thejesh@gmail.com",
            "password": "thejesh",
            "name": "Thejesh Kanuparthi",
            "dob": "2020-08-11",
            "id": 2
          },
          {
            "email": "thsths@gmail.com",
            "password": "thsths",
            "name": "Thej K",
            "dob": "2020-06-11",
            "id": 4
          },
          {
            "email": "thejeshh@gmail.com",
            "password": "thejesh",
            "name": "Thejesh K",
            "dob": "2019-07-04",
            "id": 5
          },
          {
            "email": "thejesh@gmail.com",
            "password": "thejesh19",
            "name": "Thejesh Kanuparthi",
            "dob": "2020-03-11",
            "id": 6
          },
          {
            "email": "thejesh@gmail.com",
            "password": "thejesh19",
            "name": "Thejesh Kanuparthi",
            "dob": "2020-03-11",
            "id": 7
          }
    ]

    return login;

}

export default loginReducer;
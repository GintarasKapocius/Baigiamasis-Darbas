
class UserViewModel {
    constructor(user) {
      const { SERVER_DOMAIN, SERVER_PORT } = process.env;
      this.id = user.id;
      this.email = user.email;
      this.role = user.role;
      this.fullName = user.fullName;
      this.positiontitle = user.positiontitle;
      this.imgSrc = user.imgSrc;
    }
  }
  
  export default UserViewModel;
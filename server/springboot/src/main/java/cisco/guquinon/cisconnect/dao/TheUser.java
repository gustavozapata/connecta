package cisco.guquinon.cisconnect.dao;

import cisco.guquinon.cisconnect.model.UserModel;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("user")
public class TheUser {

    private static UserModel userData;

    static {
        userData = new UserModel( 1, "Gustavo", "Zapata", "April 1, 2018");
    }

    public UserModel findOne() {
        return userData;
    }
}

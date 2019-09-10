package cisco.guquinon.cisconnect.dao;

import cisco.guquinon.cisconnect.model.Friend;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Repository
@Qualifier("friend")
public class FriendData implements TheDao {

    private static Map<Integer, Friend> friendData;

    static {
        friendData = new HashMap<Integer, Friend>(){
            {
                put(1, new Friend(1, "\uD83D\uDE00","Andres Zapata", new Date(), "Born in Aguadas, Caldas"));
                put(2, new Friend(2, "\uD83D\uDC69","Valeria Zapata", new Date(10), "Born in Kingston, London"));
                put(3, new Friend(3, "\uD83D\uDE4E\u200D️","Liliana Quinonez", new Date(200), "Born in Valle del Cauca"));
                put(4, new Friend(4, "\uD83D\uDE45\u200D️","Natanael Santos", new Date(), "Born in Vahiao"));
            }
        };
    }

    @Override
    public Collection findAll() {
        return friendData.values();
    }

    @Override
    public Friend findById(int id) {
        return friendData.get(id);
    }
}

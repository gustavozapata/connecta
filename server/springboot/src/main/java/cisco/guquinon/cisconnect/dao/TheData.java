package cisco.guquinon.cisconnect.dao;

import cisco.guquinon.cisconnect.model.Friend;
import cisco.guquinon.cisconnect.model.TheModel;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
@Qualifier("data")
public class TheData implements TheDao {

    private static Map<Integer, TheModel> mapData;

    static {
        mapData = new HashMap<Integer, TheModel>(){
            {
                put(1, new TheModel(1, "Selling MacBook Pro", "mac.jpg"));
                put(2, new TheModel(2, "Buy car", "car.jpg"));
                put(3, new TheModel(3, "Teaching Spanish", "teacher.jpg"));
                put(4, new TheModel(4, "Travel", "travel.jpg"));
            }
        };
    }

    @Override
    public Collection findAll() {
        return mapData.values();
    }

    @Override
    public Friend findById(int id) {
        return null;
    }
}

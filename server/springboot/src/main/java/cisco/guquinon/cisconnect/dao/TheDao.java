package cisco.guquinon.cisconnect.dao;

import cisco.guquinon.cisconnect.model.Friend;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface TheDao<T> {
    Collection<T> findAll();
    Friend findById(int id);
}

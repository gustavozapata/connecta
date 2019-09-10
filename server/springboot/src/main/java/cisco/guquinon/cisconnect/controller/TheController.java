package cisco.guquinon.cisconnect.controller;

import cisco.guquinon.cisconnect.dao.TheUser;
import cisco.guquinon.cisconnect.model.Friend;
import cisco.guquinon.cisconnect.model.TheModel;
import cisco.guquinon.cisconnect.dao.TheDao;
import cisco.guquinon.cisconnect.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = {"*"})
@Controller
public class TheController {

    @Autowired
    @Qualifier("data")
    TheDao theDao;

    @Autowired
    @Qualifier("user")
    TheUser theUser;

    @Autowired
    @Qualifier("friend")
    TheDao theFriend;

    @GetMapping(value = "/")
    @ResponseBody
    public Collection<TheModel> home(){
        return theDao.findAll();
    }

    @GetMapping("/profile")
    @ResponseBody
    public UserModel profile(){
        return theUser.findOne();
    }

    @GetMapping(value = "/friends")
    @ResponseBody
    public Collection<Friend> friends() {
        return theFriend.findAll();
    }

    @GetMapping(value = "/friends/{id}")
    @ResponseBody
    public Friend getFriendById(@PathVariable("id") int id){
        return theFriend.findById(id);
    }
}

package cisco.guquinon.cisconnect.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Friend {

    @Id
    private int id;
    private String image;
    private String friendName;
    private Date since;
    private String born;

    public Friend(int id, String image, String friendName, Date since, String born) {
        this.id = id;
        this.image = image;
        this.friendName = friendName;
        this.since = since;
        this.born = born;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getFriendName() {
        return friendName;
    }

    public void setFriendName(String friendName) {
        this.friendName = friendName;
    }

    public Date getSince() {
        return since;
    }

    public void setSince(Date since) {
        this.since = since;
    }

    public String getBorn() {
        return born;
    }

    public void setBorn(String born) {
        this.born = born;
    }
}

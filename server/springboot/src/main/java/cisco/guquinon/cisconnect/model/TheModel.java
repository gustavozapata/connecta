package cisco.guquinon.cisconnect.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TheModel {

    @Id
    private int id;
    private String name;
    private String image;
    private int likes;
    private int dislikes;

    public TheModel(int id, String name, String image){
        this.id = id;
        this.name = name;
        this.image = image;
        this.likes = 0;
        this.dislikes = 0;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage(){
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }
}

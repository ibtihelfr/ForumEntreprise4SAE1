package tn.esprit.forum.dto;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import tn.esprit.forum.entities.Enum.Role;
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SignupRequestDTo {

    Long id;
    int cin;
    String firstName;
    String lastName;
    String picture;

    String email;
    int phoneNumber;
    String password;
    String cv;

}

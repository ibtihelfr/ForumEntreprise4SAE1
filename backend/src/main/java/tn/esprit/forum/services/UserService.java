package tn.esprit.forum.services;

import tn.esprit.forum.dto.SignupRequestDTo;
import tn.esprit.forum.dto.UserDto;
import tn.esprit.forum.entities.User;

import java.util.List;

public interface UserService {
    User addUser(User user);
    User deleteUser(long id );
    List<User> getAllUser();
    User updateUser(User user);
    Boolean presentByEmail(String Email);
     UserDto signupClient(SignupRequestDTo signupRequestDTo);
    UserDto signupCompany(SignupRequestDTo signupRequestDTo);



    }

package tn.esprit.forum.services.Imp;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tn.esprit.forum.dto.SignupRequestDTo;
import tn.esprit.forum.dto.UserDto;
import tn.esprit.forum.entities.Enum.Role;
import tn.esprit.forum.entities.User;
import tn.esprit.forum.repositories.UserRepository;
import tn.esprit.forum.services.UserService;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {
    private final UserRepository userRepository;

    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User deleteUser(long id) {
        userRepository.deleteById(id);
        return null;
    }
    public List<User> getAllUser() {
        return (List<User>) userRepository.findAll();}

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }
    public UserDto signupClient(SignupRequestDTo signupRequestDTo){
        User user=new User();
        user.setFirstName(signupRequestDTo.getFirstName());
        user.setCin(signupRequestDTo.getCin());
        user.setLastName(signupRequestDTo.getLastName());
        user.setCv(signupRequestDTo.getCv());
        user.setEmail(signupRequestDTo.getEmail());
        user.setPhoneNumber(signupRequestDTo.getPhoneNumber());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequestDTo.getPassword()));
        user.setPicture(signupRequestDTo.getPicture());
        user.setRole(Role.EXPOSANT);
        return userRepository.save(user).getDto();


    }

    @Override
    public UserDto signupCompany(SignupRequestDTo signupRequestDTo) {
        User user=new User();
        user.setFirstName(signupRequestDTo.getFirstName());
        user.setCin(signupRequestDTo.getCin());
        user.setLastName(signupRequestDTo.getLastName());
        user.setCv(signupRequestDTo.getCv());
        user.setEmail(signupRequestDTo.getEmail());
        user.setPhoneNumber(signupRequestDTo.getPhoneNumber());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequestDTo.getPassword()));
        user.setPicture(signupRequestDTo.getPicture());
        user.setRole(Role.EXPOSANT);
        return userRepository.save(user).getDto();}







    @Override
    public Boolean presentByEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        return userOptional.isPresent();
    }


}

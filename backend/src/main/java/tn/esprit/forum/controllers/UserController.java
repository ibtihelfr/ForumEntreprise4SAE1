package tn.esprit.forum.controllers;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.json.JSONObject;
import org.postgresql.plugin.AuthenticationRequestType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import tn.esprit.forum.dto.AuthenticationRequest;
import tn.esprit.forum.dto.LoginRequest;
import tn.esprit.forum.dto.SignupRequestDTo;
import tn.esprit.forum.dto.UserDto;
import tn.esprit.forum.entities.User;
import tn.esprit.forum.repositories.UserRepository;
import tn.esprit.forum.services.UserService;
import tn.esprit.forum.services.jwt.UserDetailsServiceImpl;
import tn.esprit.forum.utill.jwtUtill;
import java.util.List;

import static org.json.JSONObject.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("user")
public class UserController {
    private final UserService userService;

    @Autowired
    AuthenticationManager authenticationManager;

@Autowired
    private UserDetailsServiceImpl userDetailsService;
@Autowired
private jwtUtill jwtutill;
@Autowired
private UserRepository userRepository;
@Autowired

    @PostMapping("/add")
    public User addUser(@RequestBody User inscrit) {
        return userService.addUser(inscrit);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
    @GetMapping("/allUser")
    List<User> users(){
        return userService.getAllUser();
    }
    @PutMapping("/updateUser")
    User UpdateUser(@RequestBody User user){
        return userService.updateUser(user );
}

   public static final String Token_PREFIX ="Bearer";
    public static final String HEADER_STRING="Authorization";
    @PutMapping("/Exposant/signup")
    public ResponseEntity<?> signupClient (@RequestBody SignupRequestDTo signupRequestDTo){
       if (userService.presentByEmail(signupRequestDTo.getEmail())){
           return new ResponseEntity<>("Client already exists with this email!!" , HttpStatus.NOT_ACCEPTABLE);
       }
       UserDto createdUser = userService.signupCompany(signupRequestDTo);
       return new ResponseEntity<>(createdUser,HttpStatus.OK);
    }

    @PostMapping("/authenticate")
    public void createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest, HttpServletResponse response) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect username or password", e);
        }
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtutill.generateToken(userDetails);
       User user = userRepository.findByEmail(authenticationRequest.getUsername()).get();
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("token", jwt);
        jsonResponse.put("user", user.getDto());
        jsonResponse.put("role", user.getRole());
        response.getWriter().write(jsonResponse.toString());

        response.addHeader("Access-Control-Expose-Headers","Authorization");
response.addHeader("Access-Control-Expose-Headers","Authorization"+"X-PINGOTHER,Origin,X-Requested-With,Content-Type,Accept,Content-Type,Authorization");
response.addHeader(HEADER_STRING,Token_PREFIX+jwt);
    }

}






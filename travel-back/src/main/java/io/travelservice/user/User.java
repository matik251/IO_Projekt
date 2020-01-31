package io.travelservice.user;

public class User {
    public static boolean authenticateUser(final String username, final String password) {
        if(username.equals("admin") && password.equals("admin")) {
            return  true;
        }
        return false;
    }
}

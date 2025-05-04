package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OTPService {

    @Autowired
    private JavaMailSender mailSender;

    private final Map<String, String> otpStorage = new HashMap<>();

    public String generateOTP(){
        Random random = new Random();
        return String.valueOf(100000 + random.nextInt(900000));
    }

    public void sendOTP(String toEmail){
        String otp = generateOTP();
        otpStorage.put(toEmail, otp);  // Store OTP with email as key

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("OTP: QUICKMECHANIC");
        message.setText("Your OTP is: " + otp + ". DO NOT SHARE IT.");
        
        mailSender.send(message);
        System.out.println("OTP sent to " + toEmail);
    }

    public boolean verifyOTP(String userOTP){
        return otpStorage.containsValue(userOTP);
    }
}

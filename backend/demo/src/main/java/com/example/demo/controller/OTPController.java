package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.OTPService;

@RestController
@RequestMapping("/otp")
@CrossOrigin(origins = "http://localhost:5173")
public class OTPController {
    
    @Autowired
    private OTPService otpService;
    
    @GetMapping("/send/{email}")
    public String sendOTP(@PathVariable String email) {
        otpService.sendOTP(email);
        return "OTP sent to " + email;
    }

    @GetMapping("/verify/{otp}")
    public String verifyOTP(@PathVariable String otp) {
        return otpService.verifyOTP(otp) ? "OTP Verified!" : "Invalid OTP!";
    }
}

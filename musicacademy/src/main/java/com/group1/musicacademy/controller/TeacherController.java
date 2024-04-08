package com.group1.musicacademy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teacher")
@CrossOrigin
public class TeacherController {
    @GetMapping
    public ResponseEntity<String> home(){
        return ResponseEntity.ok("Hello, This is teacher's homePage");
    }
}

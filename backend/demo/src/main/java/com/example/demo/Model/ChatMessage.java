package com.example.demo.Model;

public class ChatMessage {
    private String content;
     public ChatMessage(){}

     public ChatMessage(String content){
        this.content= content;
     }
     private String getContent(){
        return content;
     }
     private void setContent(String content){
        this.content=content;
     }
}

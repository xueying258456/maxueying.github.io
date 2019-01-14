---
layout: post
title:  "BlackJack CardGame"
categories: Game
tags: Game
author: MLM
---


Introduction

A new casino has come to LAS VEGAS, but this casino does not want to have human staff, but they want to implement a series of computer systems that automate the process. After looking for references and recommendations, the administrative team has decided to hire you to develop these systems.
Your assignment

> BlackJack

Write a function that draws cards for the dealer, and returns the players who have won.

Each table will consist of 3 players, "Player 1", "Player 2", "Player 3"
Rules
> 
> Players play against the croupier only, not against other players.
> In blackjack each card has its value, the numerals are worth whatever their number indicates. "J", "Q" and "K" are worth 10, "A" may worth 11 or 1, always trying to keep the highest score possible.
> If a player exceeds 21 points, they loses.
> The croupier must draw card from deck until it's hand scores 17 or more points.
> A player has a blackjack when they has 2 card, a worth 10 card, and an "A"
> If the player has a blackjack, then they won, unless the croupier also has a blackjack.

Examples
```
Player 1 hand => "J" , "A"                  // 21 Black Jack
Player 2 hand => "10", "5", "6"             // 21
Player 3 hand => "3" , "6", "A","3","A","K" // 24 
Croupier hand => "9" , "7"                  // 16
Deck          => "5" , "4" , "K" , "2"

Since the dealer has less than 17 points, it must draw a card.

Croupier hand => "9" , "7", "5"             // 21
Deck          => "4" , "K" , "2"

now comparing hands
Player 1 scores 21, croupier scores 21, but Player 1 has Black Jack, so Player 1 won
Player 2 scores 21, croupier scores 21, draw
Player 3 scores 24, Player 3 exceeded 21  so he lost

return ["Player 1"]

Player 1 hand => "10" , "K"            // 20
Player 2 hand => "10", "2", "6"        // 18
Player 3 hand => "8" , "8", "5"        // 21 
Croupier hand => "5" , "10"            // 15
Deck          => "A" , "3" , "K" , "2"

Since the dealer has less than 17 points, it must draw a card.

Croupier hand => "5" , "10", "A", "3"  // 19
Deck          => "K" , "2"

now comparing hands
Player 1 scores 20, croupier scores 19, Player 1 won
Player 2 scores 18, croupier scores 19, Player 2 lost
Player 3 scores 21, croupier scores 19, Player 3 won

return ["Player 1", "Player 3"]
```

Assumptions

>   The inputs will never be null.

>   All letters are in uppercase

>   When the croupier draws a card, the croupier draws the first element from deck


# 我的代码

```

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CardGame {

	public static String[] getBlackJackWinners(String[] player1, String[] player2, String[] player3, String[] croupier, String... cards) {
		
		int[] number = {getCardNumber(player1),getCardNumber(player2),getCardNumber(player3)};
		
		List<String> croupierList = new ArrayList<String>(Arrays.asList(croupier));
		List<String> cardsList = new ArrayList<String>(Arrays.asList(cards));
		int croupierNumber = getCardNumber(croupier);
		while(croupierNumber > 0 && croupierNumber < 17) {
			croupierList.add(cardsList.get(0));
			cardsList.remove(0);
			int newNumber = getCardNumber(croupierList.toArray(new String[0]));
			croupierNumber = newNumber == 0 ? 0 : newNumber;
		};
		
		System.out.println(getCardNumber(player1)+"|"+getCardNumber(player2)+"|"+getCardNumber(player3)+"|"+croupierNumber+"\n");
		
		ArrayList<String> returnString = new ArrayList<String>();
		for (int i = 0; i < number.length; i++) {
			switch (number[i]) {
			case 0:
				continue;
			case -1:
				if(croupierNumber == -1) continue; 
				else returnString.add("Player " + (i + 1));
				break;
			default:
				if(croupierNumber == -1) continue; 
				if(croupierNumber == 0) returnString.add("Player " + (i + 1));
				else if(number[i] > croupierNumber) returnString.add("Player " + (i + 1));
				else continue; 
				break;
			}
		}
		return returnString.toArray(new String[0]) ;
	}
	
	public static int getCardNumber(String[] card) {
		int number = 0;
		
		for (String c : card) number += Math.min(" A2345678910JQK".indexOf(c), 10);
		for (String c : card) if (c == "A" && number <= 11) number += 10;
		
		// 0 means Boom;
		// -1 means BlackJack;
		if(number > 21) return 0;
		if(number == 21) return card.length == 2 ? -1 : number;
		return number;
		
	};
  
}

```


	
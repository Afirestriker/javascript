## JavaScript Object:
> Object in javaScript turns out to be quite powerful. To be able to represent data in a structured way, where we have an association of keys or otherwise known as properties with particular values and to be able to access a particular value.
> It turns out that one of the ways this is make 'object' most useful is in the exchange of data-- moving data around from one service to another.

## APIs (Application Programming Interfaces)
> - An **Application Programming Interface (API)** is a ***contract that allows code to talk to other code***. APIs are the building blocks of modern software because they allow for the sharing of resources and services across applications, organizations, and devices.  
> - API, which in the context of the web, you can think of as some well-defined structured way for services on the internet to communicate with each other. 
> - If you want your application to be able to talk to some other service-- maybe you want your application to interact with Google Maps, or to be able to interact with Amazon, or some other weather service to get the day's weather-- then you might be able to access some API, some mechanism whereby you can communicate with another service by sending a request and receiving back data in some sort of very well-structured format. And very often, that well-structured format happens to be a particular type of data known as JSON

## Why are APIs Important?
> 1. APIs help developers **integrate exciting features** and **build automations** without reinventing the wheel 
> *ex: using a Weather API instead of launching your own weather balloons*
> 2. APIs allow enterprises to **open up their product for faster innovation**
> *ex: apps that use data from Twitter/Facebook APIs*  
> 3. APIs can **be products themselves**
*ex: Software as a Service (SaaS) products like Stripe/Twilio APIs*  

## JSON (JavaScript Object Notation)
> JSON, is a way of transferring data in the form of JavaScript objects-- these sort of objects that happen to have properties and values associated with them. 

> And the very nice thing about  this(JSON) particular representation is that it is both human-readable and machine-readable-- that we as people can look at this and get an intuitive understanding for what all of this means, but also a computer knows how to access particular properties that appear before the colon and get access to what those values are, which appear after the colon as well. 

> - And another advantage of the JSON representation is it is very conducive to representing structures of things. So these values don't just need to be strings or numbers. They could be lists, or arrays that happen to have a sequence of possible values, or they could even be other JavaScript objects that if we wanted to represent not just the city name, but represent the city name and the airport code

> - And the important thing is as long as I and the person I'm communicating with agree upon this representation, agree upon what the names of these keys are and what the structure of this JSON payload, this JSON object happens to be, then the person on the receiving end can take this data and write a program that's able to interpret it and use that data in some meaningful way. 


:bulb: And so we'll see an example of this now of using JavaScript to be able to communicate with yet another online service, in particular for accessing information about currency exchange rates. Currency exchange rates are always changing. We want access to the latest currency exchange rate data. And if there is an online service, an API, that provides access to that data in JSON form-- in a format like this that is machine-readable-- then we can use that data to write a currency exchange application that uses real-time data in order to make those conversions. 
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 6
My Partner's Key: 10

Our initial shared key: 16

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

[Document with encrypted text](https://docs.google.com/document/d/
1o7jzGM0BWzv4xlEkbTsKW8zUSBLEl9XvYerYWYPpxhE/edit?usp=sharing)

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. 
By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity 
for convenience, but let's see what the binary looks like.

Go back to the first encrypted message that you sent 
(it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. 
But we know that the real message is in binary.

Select the first six characters from this message and copy them here:
jYzKev

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information 
below with the binary values you computed above.

    =========
    Packet 1:

    Source: Micah
    Destination: Lexi  
    Sequence: 1/3
    Data: 01101010 01011001
    =========
    Packet 2:

    Source: Micah
    Destination: Lexi
    Sequence: 2/3 
    Data: 01111010 01001011
    =========
    Packet 3:

    Source: Micah
    Destination: Lexi
    Sequence: 3/3
    Data: 01100101 01110110
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What 
purpose did each serve in this simulation?
	- symmetric uses one key for encryption and decryption. Asynnetric uses a pubic key and private key for encryption and decryption respectively. When we did symmetric, we just did a simple encryption with a key. When we did asymmetric, we sent the message after being shifted by a caesar cypher, where only we knew the key. 
- Why is it important that this protocol uses a new key for each message?
	- It makes surw that if the first key gets compromised, then the restwont get compromised.
- Why is it important that you never share your secret key?
	- your secret key is unique to you. If you share it, anyine will be able to know what the encryped messages you revieve are. 
- In the transport layer, do these messages use TCP or UDP? Why?
	- TCP so all the packet arrive and are correct due to the messages being important.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.
	- The internet layer added the important data like to, from,and packet number.
	- The link layer sends the data through the physical connection.
	- Bluetooth, wifi, ethernet.
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other information can they still see?
	- They can see the public key that was used to encrypt the message.

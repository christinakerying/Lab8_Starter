# Lab 8 - Starter

Me: Christina Tan, no partner

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
Within a Github action that runs whenever code is pushed 
Because CI/CD!! They're automated tests, so they can easily be run whenever code is pushed. That will be more often than manually, and it definitely doesn't make sense to only test once at the end when development is done.

2) Would you use an end to end test to check if a function is returning the correct output? NO

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
NO, because a million things could go wrong during that process, and you'll never figure out where. Unit tests are meant for much smaller things. An end to end test would be better for the message feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes, that would be appropriate! It's the correct scope to test in a unit test, it's easily measurable with a yes/no answer, and the yes/no answer actually means something. The result is that the unit test will test if the message length is correctly 80 chars or less. This is a good unit test.


To Deploy
export
PHONE_NUM="YOUR TWILIO NUMBER"
TWILIO_ACCOUNT_SID="YOUR ACCOUNT SID"
TWILIO_AUTH_TOKEN="YOUR AUTH TOKEN"
MONGOHQ_URL="A mongo database"
Then run bin/www

Quick summary of what is done

You can make calls to a number
The fizzbuzz prompt works (mounted at /twiml/call)
Fizzbuzz works
Calls get stored in mongodb
Delays work


Things that could be better...
The delay will break if the server goes down
The updates that should be happening when the call is recived by the fizzbuzzer are not happening, I don't konw why yet



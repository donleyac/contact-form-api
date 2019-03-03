Requires installing serverless globally and settings up serverless configs

npm i -g serverless

example serverless config command
serverless config credentials \
    --provider aws \
    --key xxxxxxxxxxxxxx \
    --secret xxxxxxxxxxxxxx

example secrets.json
{
  "NODE_ENV":"dev",
  "DOMAIN":"https://xxxx.com",
  "PROFILE":"default",
  "SOURCE_EMAIL": "xxxx@xxxx.com"
}

example emails.json, the emails contained here must be aws verified emails
{
  "key": ["email1", "email2"]
}


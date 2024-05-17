import stripe

# Set your secret key
stripe.api_key = 'your_secret_key_here'

try:
    # Create an Express account
    account = stripe.Account.create(
        type='express'
    )

    print("Express account created successfully:", account.id)
    print("Account links:")
    for link in account.links:
        print(f"{link.type}: {link.url}")

except stripe.error.StripeError as e:
    # Display error message in case of failure
    print("Error:", e)

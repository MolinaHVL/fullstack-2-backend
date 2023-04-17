const admin = require('firebase-admin');

const SetClaim = (UserUID, claim) => {

    const serviceAccount = {
        "type": process.env.FIREBASE_ADMIN_TYPE,
        "project_id": process.env.FIREBASE_ADMIN_PROJECT_ID,
        "private_key_id": process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
        "private_key": process.env.FIREBASE_ADMIN_PRIVATE_KEY,
        "client_email": process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        "client_id": process.env.FIREBASE_ADMIN_CLIENT_ID,
        "auth_uri": process.env.FIREBASE_ADMIN_AUTH_URI,
        "token_uri": process.env.FIREBASE_ADMIN_TOKEN_URI,
        "auth_provider_x509_cert_url": process.env.FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
        "client_x509_cert_url": process.env.FIREBASE_ADMIN_CLIENT_X509_CERT_URL
    }

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });

    const customClaims = {};
    customClaims[claim] = true;

    return admin
        .auth()
        .setCustomUserClaims(UserUID, customClaims)
        .then(() => {
            console.log(`Custom claim "${claim}" set for user: ${UserUID}`);
            process.exit();
        })
        .catch((error) => {
            console.error(`Error setting custom claim "${claim}" for user: ${UserUID}`, error);
            process.exit(1);
        });
}

module.exports = { SetClaim };




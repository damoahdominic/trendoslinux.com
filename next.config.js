module.exports  = (phase, {defaultConfig}) => {
    // new NEXTjs Config
    let newConfig = {
        env: {
            NOSECRET: "at-the-moment"
        },
        compress: false,
        poweredByHeader: false,
        generateEtags: false,
        images: {
            unoptimized: true
        }
    };
    return newConfig;
}
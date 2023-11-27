// module.exports = ({env}) => (

//     {email:{
//         provider: "sendgrid",
//         providerOptions:{
//             apiKey: env("SENDGRID_API_KEY")
//         },
//         settings:{
//             defaultForm:"petchi@kanapathiam.com",
//             defaultTo:"dealsfavorite@gmail.com"
//         },
//     },
//     // upload:{
//     //     provider: 'aws-s3',    
//     //     providerOptions:{
//     //         accessKeyId: env('AWS_ACCESS_KEY_ID'),
//     //         secretAccessKey: env('AWS_ACCESS_SECRET'),
//     //         region: env('AWS_REGION'),
//     //         params:{
//     //             Bucket: env('AWS_BUCKET_NAME')
//     //         }
//     //     }
//     // }
// });


module.exports = ({env}) => (

    {email:{
        provider: "sendgrid",
        providerOptions:{
            apiKey: env("SENDGRID_API_KEY")
        },
        settings:{
            defaultForm:"petchi@kanapathiam.com",
            defaultTo:"dealsfavorite@gmail.com",
        },
    },
    // upload:{
    //     provider: 'aws-s3',    
    //     providerOptions:{
    //         accessKeyId: env('AKIAROLIUP4AWTARB7GO'),
    //         secretAccessKey: env('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'),
    //         region: env('us-east-1'),
    //         params:{
    //             Bucket: env('jamstackimages')
    //         }
    //     }
    // }
});
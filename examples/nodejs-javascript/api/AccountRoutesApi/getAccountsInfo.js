const symbolSdk = require('@nemtus/symbol-sdk-openapi-generator-typescript-axios');

(async () => {
  const configurationParameters = {
    basePath: 'http://symbol-sakura-16.next-web-technology.com:3000',
  };
  const configuration = new symbolSdk.Configuration(configurationParameters);
  const accountRoutesApi = new symbolSdk.AccountRoutesApi(configuration);
  const requestParameters = {
    accountIds: {
      'addresses': ['NCSIOEWE2364XXP65426W3RUGBRYOAGR3KMMCIA']
    }
  };
  const response = await accountRoutesApi.getAccountsInfo(requestParameters);
  console.log(response.status); // Example: 200
  console.log(response.statusText); // Example: "OK"
  console.dir(response.data, { depth: null });
  // Example:
  /*
  [
    {
      account: {
        version: 1,
        address: '68A48712C4D6FDCBDDFEEF35EB6E3430638700D1DA98C120',
        addressHeight: '1',
        publicKey: 'B86304B01045894ED9250B3DCD6313DC2EC0DD529B4E864EA376A2F341D3CFD4',
        publicKeyHeight: '447',
        accountType: 1,
        supplementalPublicKeys: {
          linked: {
            publicKey: '5F87A37D1EAD570F4D0FD4C11A9D5EED5ABE82EF2E992B97CCDAC84F241470E0'
          },
          vrf: {
            publicKey: '806E9448598C922B371DA8CFD7E16E8F5F53594B3AECE13F0708778A4480A752'
          }
        },
        activityBuckets: [
          {
            startHeight: '1709280',
            totalFeesPaid: '0',
            beneficiaryCount: 0,
            rawScore: '576314702612'
          },
          {
            startHeight: '1708560',
            totalFeesPaid: '0',
            beneficiaryCount: 0,
            rawScore: '576324018928'
          },
          {
            startHeight: '1707840',
            totalFeesPaid: '0',
            beneficiaryCount: 0,
            rawScore: '576331799590'
          },
          {
            startHeight: '1707120',
            totalFeesPaid: '0',
            beneficiaryCount: 1,
            rawScore: '576210035373'
          },
          {
            startHeight: '1706400',
            totalFeesPaid: '0',
            beneficiaryCount: 1,
            rawScore: '576184093649'
          }
        ],
        mosaics: [
          { id: '6BED913FA20223F8', amount: '627308914691' },
          { id: '24F7CF825DBCDD42', amount: '499999886' },
          { id: '310378C18A140D1B', amount: '100' },
          { id: '4F2DC8BA863044C6', amount: '5' },
          { id: '6AE25FA5E8CA0646', amount: '1000000000' }
        ],
        importance: '576314702612',
        importanceHeight: '1709280'
      },
      id: '60517BE5CCA17918A561056D'
    }
  ]
  */
})();

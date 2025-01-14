import { provideLocalStorageDataClass } from '../../../utils/provideLocalStorageDataClass'

export function localStorageOrderDataClass() {
  return provideLocalStorageDataClass('Order', {
    initialContent: [
      {
        _id: '137EBD84B5C0ED8EE040A8C00F0121EC',
        keyword: 'Schmieranlage für Maier Schmiertechnik',
        number: 'P-06.002843',
        type: 'PSA_ORD_STY_NEW',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: 'F87BDC400E41D630E030A8C00D01158A',
        technicalAgent: 'F9E1B255870E5EEEE030A8C00D012D39',
        salesPartner: '',
        status: 'PSA_PRO_ORD_CLS',
        mainStatus: 'PSA_SAP_MAI_QUO_ORD_PRP',
        open: false,
        quoteAt: '2023-01-17T09:29:14Z',
        orderAt: '2023-06-17T22:00:00Z',
        deliveryAt: '2023-07-05T09:29:14Z',
        termsOfDelivery: 'RFC_TOD_FAS',
        termsOfPayment: 'RFC_TOP_NT60',
        totalPrice: 800959.16,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: '2C7A62C9CD514B3AE040A8C00F011B04',
        keyword: '30 Ventile, 10bar',
        number: 'P-07.004451',
        type: 'PSA_ORD_STY_NEW',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: '228C5C6067EF486FB72F8D4BAAE6AB08',
        technicalAgent: '',
        salesPartner: 'Hono Gerätebau GmbH (Grafing)',
        status: 'PSA_PRO_ORD_CLS',
        mainStatus: 'PSA_SAP_MAI_QUO_ORD_PRP',
        open: false,
        quoteAt: null,
        orderAt: '2023-03-16T22:00:00Z',
        deliveryAt: '2021-12-13T11:53:08Z',
        termsOfDelivery: 'RFC_TOD_DEQ',
        termsOfPayment: 'RFC_TOP_NT60',
        totalPrice: 83121.19999694824,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: '3DDF9E11BF6E1F8DE040007F01005605',
        keyword: "3 Zentralschmieranlagen 'Metallbau' für Maier Schmiertechnik",
        number: 'P-07.005675',
        type: 'PSA_ORD_STY_NEW',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: 'F9E1B255870E5EEEE030A8C00D012D39',
        technicalAgent: '228C5C6067EF486FB72F8D4BAAE6AB08',
        salesPartner: '',
        status: 'PSA_PRO_ORD_CLS',
        mainStatus: 'PSA_SAP_MAI_QUO_ORD_PRP',
        open: false,
        quoteAt: '2022-08-22T13:27:03Z',
        orderAt: '2024-09-14T22:00:00Z',
        deliveryAt: '2022-10-30T10:50:38Z',
        termsOfDelivery: 'RFC_TOD_DES',
        termsOfPayment: 'RFC_TOP_NT60',
        totalPrice: 42873.010714285665,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: '4076A80ED49B4D85E040007F01001A11',
        keyword: 'Schmieranlage 2, 30-12',
        number: 'P-07.005765',
        type: 'PSA_ORD_STY_NEW',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: 'D456ACF6FF405922E030A8C02A010C68',
        technicalAgent: '',
        salesPartner: 'Hono Gerätebau GmbH (Grafing)',
        status: 'PSA_PRO_ORD_CLS',
        mainStatus: 'PSA_SAP_MAI_QUO_ORD_PRP',
        open: false,
        quoteAt: '2023-05-13T14:30:18Z',
        orderAt: '2024-07-10T22:00:00Z',
        deliveryAt: '2023-08-18T08:19:18Z',
        termsOfDelivery: 'RFC_TOD_DAF',
        termsOfPayment: 'RFC_TOP_NT60',
        totalPrice: 60917.0,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: '75A8E1411FAE4E329FE28F250EABD8E0',
        keyword: 'Auftrag Schmieranlage für Maier',
        number: 'P-20-009129',
        type: 'PSA_ORD_STY_STD',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: '052601BEBCEC39C8E040A8C00D0107AC',
        technicalAgent: '18EEEAEC56D37397E040A8C00F012319',
        salesPartner: 'Hono Gerätebau GmbH (Grafing)',
        status: 'PSA_PRO_ORD_INC',
        mainStatus: 'PSA_SAP_MAI_ORD_CNC_EIN',
        open: true,
        quoteAt: '2023-12-10T12:48:42Z',
        orderAt: '2023-12-10T13:05:28Z',
        deliveryAt: '2023-12-18T12:00:00Z',
        termsOfDelivery: 'RFC_TOD_CFR',
        termsOfPayment: '',
        totalPrice: 25657.904761904745,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: '9B47FC7F123B455FA76C1ECA012D31E5',
        keyword: '35 Ventile, 10bar',
        number: 'P-16-009003',
        type: 'PSA_ORD_STY_NEW',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: '228C5C6067EF486FB72F8D4BAAE6AB08',
        technicalAgent: '',
        salesPartner: 'Hono Gerätebau GmbH (Grafing)',
        status: 'PSA_PRO_ORD_INC',
        mainStatus: 'PSA_SAP_MAI_ORD_CNC_EIN',
        open: true,
        quoteAt: null,
        orderAt: '2022-12-24T23:00:00Z',
        deliveryAt: '2021-12-13T11:53:08Z',
        termsOfDelivery: 'RFC_TOD_DEQ',
        termsOfPayment: 'RFC_TOP_NT60',
        totalPrice: 75000.0,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: 'EEDF141E8169451884B23C979526C51A',
        keyword: 'Auftrag 2 x MAX 40 über Hono',
        number: 'P-14-008810',
        type: 'PSA_ORD_STY_STD',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: '052601BEBCEC39C8E040A8C00D0107AC',
        technicalAgent: '18EEEAEC56D37397E040A8C00F012319',
        salesPartner: 'Hono Gerätebau GmbH (Grafing)',
        status: 'PSA_PRO_ORD_INC',
        mainStatus: 'PSA_SAP_MAI_ORD_CNC_EIN',
        open: true,
        quoteAt: null,
        orderAt: '2024-11-08T23:00:00Z',
        deliveryAt: '2023-11-27T13:26:44Z',
        termsOfDelivery: 'RFC_TOD_CFR',
        termsOfPayment: 'PSI_TOP_40',
        totalPrice: 52043.52380952379,
        totalPriceCurrency: 'EUR',
        description: '',
      },
      {
        _id: 'F5F3792034404D40B41A843B61DC60D1',
        keyword: 'Zentral-Schmieranlage, Metallbau, MAX/40',
        number: 'P-11-007605',
        type: 'PSA_ORD_STY_NEW',
        customer: 'Maier Schmiertechnik GmbH (München)',
        commercialAgent: '052601BEBCEC39C8E040A8C00D0107AC',
        technicalAgent: 'D38D7FBFA277856DE030A8C02A010460',
        salesPartner: '',
        status: 'PSA_PRO_ORD_CLS',
        mainStatus: 'PSA_SAP_MAI_QUO_ORD_PRP',
        open: false,
        quoteAt: null,
        orderAt: '2024-01-02T23:00:00Z',
        deliveryAt: '2023-07-23T13:35:38Z',
        termsOfDelivery: 'RFC_TOD_DDU',
        termsOfPayment: 'RFC_TOP_NT60',
        totalPrice: 25246.476190476184,
        totalPriceCurrency: 'EUR',
        description: '',
      },
    ],
  })
}

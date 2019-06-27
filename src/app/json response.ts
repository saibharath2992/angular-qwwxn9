{
    "DataDrivenScreen": {
        "ScreenName": "Bill Type Definition",
        "ScreenCode": "729|111",
        "Information": "<div id='titleBarInformation'></div>",
        "Tabs": [
            {
                "Name": "General",
                "Text": "General",
                "Columns": 2
            }
        ],
        "Fields": [
            {
                "FieldName": "Abbreviation",
                "Location": "111002",
                "TabPage": "General",
                "Caption": "Code",
                "DataType": "String",
                "TypeParam": "Maxlen=4"
            },
            {
                "FieldName": "Name",
                "Location": "111001",
                "TabPage": "General",
                "Caption": "Description",
                "DataType": "String",
                "TypeParam": "Maxlen=40"
            },
            {
                "FieldName": "RevenueCategory",
                "Location": "111003",
                "TabPage": "General",
                "Caption": "Receivable Type",
                "DataType": "Dictionary=TMSDB.Dictionary.RevenueCategory",
                "TypeParam": ""
            },
            {
                "FieldName": "GenerateBills",
                "Location": "111004",
                "TabPage": "General",
                "Caption": "Generate Bills",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "IncludeCRCACR",
                "Location": "111005",
                "TabPage": "General",
                "Caption": "Include CRC/ACR",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "DirectBillPayType",
                "Location": "111006",
                "TabPage": "General",
                "Caption": "Direct Pay",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "ExcludeFromStudentStatus",
                "Location": "111007",
                "TabPage": "General",
                "Caption": "Exclude from Student Status",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "PreEnroll",
                "Location": "111008",
                "TabPage": "General",
                "Caption": "Allow Pre-Enroll",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "Enroll",
                "Location": "111010",
                "TabPage": "General",
                "Caption": "Allow Enroll",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "TriggerInterregionalScreen",
                "Location": "111011",
                "TabPage": "General",
                "Caption": "Trigger Interregional Screen",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "TPLDirectPay",
                "Location": "111012",
                "TabPage": "General",
                "Caption": "TPL Direct Pay",
                "DataType": "Boolean",
                "TypeParam": ""
            },
            {
                "FieldName": "DirectBillFlag",
                "Location": "111013",
                "TabPage": "General",
                "Caption": "Direct Bill",
                "DataType": "Boolean",
                "TypeParam": ""
            }
        ]
    },
    "ErrorCode": 0,
    "System": {
        "ClassMethod": "TMSENS.Dictionary.EnterEdit||Screen",
        "Dispatcher": "TMSENS.Dispatcher.Membership",
        "TimeRequest": 0.002691,
        "zu5": "KPMEMDEV",
        "zdt": "2019-06-27 18:47:56",
        "sessObj": "Postman 172.26.134.245",
        "zus": "10198^EAU,TSC^M^1^ENS,AUTODOC USER^72192^3"
    }
}
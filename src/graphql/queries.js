/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMMG = /* GraphQL */ `
  query GetMMG($id: ID!) {
    getMMG(id: $id) {
      id
      messageProfileIdentifier
      motherslocalrecordid
      mothernationalreportingjurisdiction
      mothersstateofresidence
      motherscountyofresidence
      motherszipcodeofresidence
      mothersbirthdate
      numberofpregnancies
      numberoftotallivebirths
      lastmenstrualperiod
      dateoffirstprenatalvisit
      prenatalvisitindicator
      trimesteroffirstprenatalvisit
      mothersethnicity
      mothersrace
      mothersmaritalstatus
      mothershivstatusduringpregnancy
      mothersclinicalstageofsyphilis
      motherssurveillancestageofsyphilis
      datewhenmotherreceivedfirstdoseofpencillin
      trimesteroffirstpenicillin
      motherstreatment
      appropriateserologicresponse
      nontreponemaltestatfirstvisit
      nontreponemaltestat28weeks
      nontreponemaltestatdelivery
      clinicalsignsofcongenitalsyphilis
      clinicalsignsindicator
      subjectoflabtestperformed
      testtype
      testresult
      nontreponemalserologictestresult
      dateoflabresult
      testresultquant
      resultunits
      specimencollectiondate
      vitalstatus
      birthweight
      gestationalage
      longbonexrays
      darkfieldexam
      csfwbccount
      csfproteinlevel
      csfvdrltestfinding
      infanttreated
      stillbirthindicator
      createdAt
      updatedAt
    }
  }
`;
export const listMMGS = /* GraphQL */ `
  query ListMMGS(
    $filter: ModelMMGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMMGS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        messageProfileIdentifier
        motherslocalrecordid
        mothernationalreportingjurisdiction
        mothersstateofresidence
        motherscountyofresidence
        motherszipcodeofresidence
        mothersbirthdate
        numberofpregnancies
        numberoftotallivebirths
        lastmenstrualperiod
        dateoffirstprenatalvisit
        prenatalvisitindicator
        trimesteroffirstprenatalvisit
        mothersethnicity
        mothersrace
        mothersmaritalstatus
        mothershivstatusduringpregnancy
        mothersclinicalstageofsyphilis
        motherssurveillancestageofsyphilis
        datewhenmotherreceivedfirstdoseofpencillin
        trimesteroffirstpenicillin
        motherstreatment
        appropriateserologicresponse
        nontreponemaltestatfirstvisit
        nontreponemaltestat28weeks
        nontreponemaltestatdelivery
        clinicalsignsofcongenitalsyphilis
        clinicalsignsindicator
        subjectoflabtestperformed
        testtype
        testresult
        nontreponemalserologictestresult
        dateoflabresult
        testresultquant
        resultunits
        specimencollectiondate
        vitalstatus
        birthweight
        gestationalage
        longbonexrays
        darkfieldexam
        csfwbccount
        csfproteinlevel
        csfvdrltestfinding
        infanttreated
        stillbirthindicator
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

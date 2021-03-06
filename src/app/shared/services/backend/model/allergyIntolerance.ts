/**
 * Untitled
 * Fast Healthcare Interoperability Resources (FHIR, pronounced \"Fire\") defines a set of \"Resources\" that represent granular clinical concepts. The resources can be managed in isolation, or aggregated into complex documents. Technically, FHIR is designed for the web; the resources are based on simple XML or JSON structures, with an http-based RESTful protocol where each resource has predictable URL. Where possible, open internet standards are used for data representation.  
 *
 * OpenAPI spec version: unspecified
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AccountCoverage } from './accountCoverage';
import { AccountIdentifier } from './accountIdentifier';
import { AccountMeta } from './accountMeta';
import { AccountText } from './accountText';
import { AllergyIntoleranceClinicalStatus } from './allergyIntoleranceClinicalStatus';
import { AllergyIntoleranceNote } from './allergyIntoleranceNote';
import { AllergyIntoleranceReaction } from './allergyIntoleranceReaction';


/**
 * 
 */
export interface AllergyIntolerance { 
    resourceType: string;
    id: string;
    text: AccountText;
    identifier: Array<AccountIdentifier>;
    clinicalStatus: AllergyIntoleranceClinicalStatus;
    verificationStatus: AllergyIntoleranceClinicalStatus;
    type: string;
    category: Array<any>;
    criticality: string;
    code: AllergyIntoleranceClinicalStatus;
    patient: AccountCoverage;
    onsetDateTime: string;
    recordedDate: string;
    recorder: AccountCoverage;
    asserter: AccountCoverage;
    lastOccurrence: string;
    note: Array<AllergyIntoleranceNote>;
    reaction: Array<AllergyIntoleranceReaction>;
    meta: AccountMeta;
}

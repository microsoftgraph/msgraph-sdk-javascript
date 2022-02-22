import {WorkbookFunctions} from '../../../../models/microsoft/graph/';
import {AbsRequestBuilder} from './abs/';
import {AccrIntRequestBuilder} from './accrInt/';
import {AccrIntMRequestBuilder} from './accrIntM/';
import {AcosRequestBuilder} from './acos/';
import {AcoshRequestBuilder} from './acosh/';
import {AcotRequestBuilder} from './acot/';
import {AcothRequestBuilder} from './acoth/';
import {AmorDegrcRequestBuilder} from './amorDegrc/';
import {AmorLincRequestBuilder} from './amorLinc/';
import {AndRequestBuilder} from './and/';
import {ArabicRequestBuilder} from './arabic/';
import {AreasRequestBuilder} from './areas/';
import {AscRequestBuilder} from './asc/';
import {AsinRequestBuilder} from './asin/';
import {AsinhRequestBuilder} from './asinh/';
import {AtanRequestBuilder} from './atan/';
import {Atan2RequestBuilder} from './atan2/';
import {AtanhRequestBuilder} from './atanh/';
import {AveDevRequestBuilder} from './aveDev/';
import {AverageRequestBuilder} from './average/';
import {AverageARequestBuilder} from './averageA/';
import {AverageIfRequestBuilder} from './averageIf/';
import {AverageIfsRequestBuilder} from './averageIfs/';
import {BahtTextRequestBuilder} from './bahtText/';
import {BaseRequestBuilder} from './base/';
import {BesselIRequestBuilder} from './besselI/';
import {BesselJRequestBuilder} from './besselJ/';
import {BesselKRequestBuilder} from './besselK/';
import {BesselYRequestBuilder} from './besselY/';
import {Beta_DistRequestBuilder} from './beta_Dist/';
import {Beta_InvRequestBuilder} from './beta_Inv/';
import {Bin2DecRequestBuilder} from './bin2Dec/';
import {Bin2HexRequestBuilder} from './bin2Hex/';
import {Bin2OctRequestBuilder} from './bin2Oct/';
import {Binom_Dist_RangeRequestBuilder} from './binom_Dist_Range/';
import {Binom_DistRequestBuilder} from './binom_Dist/';
import {Binom_InvRequestBuilder} from './binom_Inv/';
import {BitandRequestBuilder} from './bitand/';
import {BitlshiftRequestBuilder} from './bitlshift/';
import {BitorRequestBuilder} from './bitor/';
import {BitrshiftRequestBuilder} from './bitrshift/';
import {BitxorRequestBuilder} from './bitxor/';
import {Ceiling_MathRequestBuilder} from './ceiling_Math/';
import {Ceiling_PreciseRequestBuilder} from './ceiling_Precise/';
import {CharRequestBuilder} from './char/';
import {ChiSq_Dist_RTRequestBuilder} from './chiSq_Dist_RT/';
import {ChiSq_DistRequestBuilder} from './chiSq_Dist/';
import {ChiSq_Inv_RTRequestBuilder} from './chiSq_Inv_RT/';
import {ChiSq_InvRequestBuilder} from './chiSq_Inv/';
import {ChooseRequestBuilder} from './choose/';
import {CleanRequestBuilder} from './clean/';
import {CodeRequestBuilder} from './code/';
import {ColumnsRequestBuilder} from './columns/';
import {CombinRequestBuilder} from './combin/';
import {CombinaRequestBuilder} from './combina/';
import {ComplexRequestBuilder} from './complex/';
import {ConcatenateRequestBuilder} from './concatenate/';
import {Confidence_NormRequestBuilder} from './confidence_Norm/';
import {Confidence_TRequestBuilder} from './confidence_T/';
import {ConvertRequestBuilder} from './convert/';
import {CosRequestBuilder} from './cos/';
import {CoshRequestBuilder} from './cosh/';
import {CotRequestBuilder} from './cot/';
import {CothRequestBuilder} from './coth/';
import {CountRequestBuilder} from './count/';
import {CountARequestBuilder} from './countA/';
import {CountBlankRequestBuilder} from './countBlank/';
import {CountIfRequestBuilder} from './countIf/';
import {CountIfsRequestBuilder} from './countIfs/';
import {CoupDayBsRequestBuilder} from './coupDayBs/';
import {CoupDaysRequestBuilder} from './coupDays/';
import {CoupDaysNcRequestBuilder} from './coupDaysNc/';
import {CoupNcdRequestBuilder} from './coupNcd/';
import {CoupNumRequestBuilder} from './coupNum/';
import {CoupPcdRequestBuilder} from './coupPcd/';
import {CscRequestBuilder} from './csc/';
import {CschRequestBuilder} from './csch/';
import {CumIPmtRequestBuilder} from './cumIPmt/';
import {CumPrincRequestBuilder} from './cumPrinc/';
import {DateRequestBuilder} from './date/';
import {DatevalueRequestBuilder} from './datevalue/';
import {DaverageRequestBuilder} from './daverage/';
import {DayRequestBuilder} from './day/';
import {DaysRequestBuilder} from './days/';
import {Days360RequestBuilder} from './days360/';
import {DbRequestBuilder} from './db/';
import {DbcsRequestBuilder} from './dbcs/';
import {DcountRequestBuilder} from './dcount/';
import {DcountARequestBuilder} from './dcountA/';
import {DdbRequestBuilder} from './ddb/';
import {Dec2BinRequestBuilder} from './dec2Bin/';
import {Dec2HexRequestBuilder} from './dec2Hex/';
import {Dec2OctRequestBuilder} from './dec2Oct/';
import {DecimalRequestBuilder} from './decimal/';
import {DegreesRequestBuilder} from './degrees/';
import {DeltaRequestBuilder} from './delta/';
import {DevSqRequestBuilder} from './devSq/';
import {DgetRequestBuilder} from './dget/';
import {DiscRequestBuilder} from './disc/';
import {DmaxRequestBuilder} from './dmax/';
import {DminRequestBuilder} from './dmin/';
import {DollarRequestBuilder} from './dollar/';
import {DollarDeRequestBuilder} from './dollarDe/';
import {DollarFrRequestBuilder} from './dollarFr/';
import {DproductRequestBuilder} from './dproduct/';
import {DstDevRequestBuilder} from './dstDev/';
import {DstDevPRequestBuilder} from './dstDevP/';
import {DsumRequestBuilder} from './dsum/';
import {DurationRequestBuilder} from './duration/';
import {DvarRequestBuilder} from './dvar/';
import {DvarPRequestBuilder} from './dvarP/';
import {Ecma_CeilingRequestBuilder} from './ecma_Ceiling/';
import {EdateRequestBuilder} from './edate/';
import {EffectRequestBuilder} from './effect/';
import {EoMonthRequestBuilder} from './eoMonth/';
import {Erf_PreciseRequestBuilder} from './erf_Precise/';
import {ErfRequestBuilder} from './erf/';
import {ErfC_PreciseRequestBuilder} from './erfC_Precise/';
import {ErfCRequestBuilder} from './erfC/';
import {Error_TypeRequestBuilder} from './error_Type/';
import {EvenRequestBuilder} from './even/';
import {ExactRequestBuilder} from './exact/';
import {ExpRequestBuilder} from './exp/';
import {Expon_DistRequestBuilder} from './expon_Dist/';
import {F_Dist_RTRequestBuilder} from './f_Dist_RT/';
import {F_DistRequestBuilder} from './f_Dist/';
import {F_Inv_RTRequestBuilder} from './f_Inv_RT/';
import {F_InvRequestBuilder} from './f_Inv/';
import {FactRequestBuilder} from './fact/';
import {FactDoubleRequestBuilder} from './factDouble/';
import {FalseRequestBuilder} from './false_escaped/';
import {FindRequestBuilder} from './find/';
import {FindBRequestBuilder} from './findB/';
import {FisherRequestBuilder} from './fisher/';
import {FisherInvRequestBuilder} from './fisherInv/';
import {FixedRequestBuilder} from './fixed/';
import {Floor_MathRequestBuilder} from './floor_Math/';
import {Floor_PreciseRequestBuilder} from './floor_Precise/';
import {FvRequestBuilder} from './fv/';
import {FvscheduleRequestBuilder} from './fvschedule/';
import {Gamma_DistRequestBuilder} from './gamma_Dist/';
import {Gamma_InvRequestBuilder} from './gamma_Inv/';
import {GammaRequestBuilder} from './gamma/';
import {GammaLn_PreciseRequestBuilder} from './gammaLn_Precise/';
import {GammaLnRequestBuilder} from './gammaLn/';
import {GaussRequestBuilder} from './gauss/';
import {GcdRequestBuilder} from './gcd/';
import {GeoMeanRequestBuilder} from './geoMean/';
import {GeStepRequestBuilder} from './geStep/';
import {HarMeanRequestBuilder} from './harMean/';
import {Hex2BinRequestBuilder} from './hex2Bin/';
import {Hex2DecRequestBuilder} from './hex2Dec/';
import {Hex2OctRequestBuilder} from './hex2Oct/';
import {HlookupRequestBuilder} from './hlookup/';
import {HourRequestBuilder} from './hour/';
import {HyperlinkRequestBuilder} from './hyperlink/';
import {HypGeom_DistRequestBuilder} from './hypGeom_Dist/';
import {IfRequestBuilder} from './if_escaped/';
import {ImAbsRequestBuilder} from './imAbs/';
import {ImaginaryRequestBuilder} from './imaginary/';
import {ImArgumentRequestBuilder} from './imArgument/';
import {ImConjugateRequestBuilder} from './imConjugate/';
import {ImCosRequestBuilder} from './imCos/';
import {ImCoshRequestBuilder} from './imCosh/';
import {ImCotRequestBuilder} from './imCot/';
import {ImCscRequestBuilder} from './imCsc/';
import {ImCschRequestBuilder} from './imCsch/';
import {ImDivRequestBuilder} from './imDiv/';
import {ImExpRequestBuilder} from './imExp/';
import {ImLnRequestBuilder} from './imLn/';
import {ImLog10RequestBuilder} from './imLog10/';
import {ImLog2RequestBuilder} from './imLog2/';
import {ImPowerRequestBuilder} from './imPower/';
import {ImProductRequestBuilder} from './imProduct/';
import {ImRealRequestBuilder} from './imReal/';
import {ImSecRequestBuilder} from './imSec/';
import {ImSechRequestBuilder} from './imSech/';
import {ImSinRequestBuilder} from './imSin/';
import {ImSinhRequestBuilder} from './imSinh/';
import {ImSqrtRequestBuilder} from './imSqrt/';
import {ImSubRequestBuilder} from './imSub/';
import {ImSumRequestBuilder} from './imSum/';
import {ImTanRequestBuilder} from './imTan/';
import {IntRequestBuilder} from './int/';
import {IntRateRequestBuilder} from './intRate/';
import {IpmtRequestBuilder} from './ipmt/';
import {IrrRequestBuilder} from './irr/';
import {IsErrRequestBuilder} from './isErr/';
import {IsErrorRequestBuilder} from './isError/';
import {IsEvenRequestBuilder} from './isEven/';
import {IsFormulaRequestBuilder} from './isFormula/';
import {IsLogicalRequestBuilder} from './isLogical/';
import {IsNARequestBuilder} from './isNA/';
import {IsNonTextRequestBuilder} from './isNonText/';
import {IsNumberRequestBuilder} from './isNumber/';
import {Iso_CeilingRequestBuilder} from './iso_Ceiling/';
import {IsOddRequestBuilder} from './isOdd/';
import {IsoWeekNumRequestBuilder} from './isoWeekNum/';
import {IspmtRequestBuilder} from './ispmt/';
import {IsrefRequestBuilder} from './isref/';
import {IsTextRequestBuilder} from './isText/';
import {KurtRequestBuilder} from './kurt/';
import {LargeRequestBuilder} from './large/';
import {LcmRequestBuilder} from './lcm/';
import {LeftRequestBuilder} from './left/';
import {LeftbRequestBuilder} from './leftb/';
import {LenRequestBuilder} from './len/';
import {LenbRequestBuilder} from './lenb/';
import {LnRequestBuilder} from './ln/';
import {LogRequestBuilder} from './log/';
import {Log10RequestBuilder} from './log10/';
import {LogNorm_DistRequestBuilder} from './logNorm_Dist/';
import {LogNorm_InvRequestBuilder} from './logNorm_Inv/';
import {LookupRequestBuilder} from './lookup/';
import {LowerRequestBuilder} from './lower/';
import {MatchRequestBuilder} from './match/';
import {MaxRequestBuilder} from './max/';
import {MaxARequestBuilder} from './maxA/';
import {MdurationRequestBuilder} from './mduration/';
import {MedianRequestBuilder} from './median/';
import {MidRequestBuilder} from './mid/';
import {MidbRequestBuilder} from './midb/';
import {MinRequestBuilder} from './min/';
import {MinARequestBuilder} from './minA/';
import {MinuteRequestBuilder} from './minute/';
import {MirrRequestBuilder} from './mirr/';
import {ModRequestBuilder} from './mod/';
import {MonthRequestBuilder} from './month/';
import {MroundRequestBuilder} from './mround/';
import {MultiNomialRequestBuilder} from './multiNomial/';
import {NRequestBuilder} from './n/';
import {NaRequestBuilder} from './na/';
import {NegBinom_DistRequestBuilder} from './negBinom_Dist/';
import {NetworkDays_IntlRequestBuilder} from './networkDays_Intl/';
import {NetworkDaysRequestBuilder} from './networkDays/';
import {NominalRequestBuilder} from './nominal/';
import {Norm_DistRequestBuilder} from './norm_Dist/';
import {Norm_InvRequestBuilder} from './norm_Inv/';
import {Norm_S_DistRequestBuilder} from './norm_S_Dist/';
import {Norm_S_InvRequestBuilder} from './norm_S_Inv/';
import {NotRequestBuilder} from './not/';
import {NowRequestBuilder} from './now/';
import {NperRequestBuilder} from './nper/';
import {NpvRequestBuilder} from './npv/';
import {NumberValueRequestBuilder} from './numberValue/';
import {Oct2BinRequestBuilder} from './oct2Bin/';
import {Oct2DecRequestBuilder} from './oct2Dec/';
import {Oct2HexRequestBuilder} from './oct2Hex/';
import {OddRequestBuilder} from './odd/';
import {OddFPriceRequestBuilder} from './oddFPrice/';
import {OddFYieldRequestBuilder} from './oddFYield/';
import {OddLPriceRequestBuilder} from './oddLPrice/';
import {OddLYieldRequestBuilder} from './oddLYield/';
import {OrRequestBuilder} from './or/';
import {PdurationRequestBuilder} from './pduration/';
import {Percentile_ExcRequestBuilder} from './percentile_Exc/';
import {Percentile_IncRequestBuilder} from './percentile_Inc/';
import {PercentRank_ExcRequestBuilder} from './percentRank_Exc/';
import {PercentRank_IncRequestBuilder} from './percentRank_Inc/';
import {PermutRequestBuilder} from './permut/';
import {PermutationaRequestBuilder} from './permutationa/';
import {PhiRequestBuilder} from './phi/';
import {PiRequestBuilder} from './pi/';
import {PmtRequestBuilder} from './pmt/';
import {Poisson_DistRequestBuilder} from './poisson_Dist/';
import {PowerRequestBuilder} from './power/';
import {PpmtRequestBuilder} from './ppmt/';
import {PriceRequestBuilder} from './price/';
import {PriceDiscRequestBuilder} from './priceDisc/';
import {PriceMatRequestBuilder} from './priceMat/';
import {ProductRequestBuilder} from './product/';
import {ProperRequestBuilder} from './proper/';
import {PvRequestBuilder} from './pv/';
import {Quartile_ExcRequestBuilder} from './quartile_Exc/';
import {Quartile_IncRequestBuilder} from './quartile_Inc/';
import {QuotientRequestBuilder} from './quotient/';
import {RadiansRequestBuilder} from './radians/';
import {RandRequestBuilder} from './rand/';
import {RandBetweenRequestBuilder} from './randBetween/';
import {Rank_AvgRequestBuilder} from './rank_Avg/';
import {Rank_EqRequestBuilder} from './rank_Eq/';
import {RateRequestBuilder} from './rate/';
import {ReceivedRequestBuilder} from './received/';
import {ReplaceRequestBuilder} from './replace/';
import {ReplaceBRequestBuilder} from './replaceB/';
import {ReptRequestBuilder} from './rept/';
import {RightRequestBuilder} from './right/';
import {RightbRequestBuilder} from './rightb/';
import {RomanRequestBuilder} from './roman/';
import {RoundRequestBuilder} from './round/';
import {RoundDownRequestBuilder} from './roundDown/';
import {RoundUpRequestBuilder} from './roundUp/';
import {RowsRequestBuilder} from './rows/';
import {RriRequestBuilder} from './rri/';
import {SecRequestBuilder} from './sec/';
import {SechRequestBuilder} from './sech/';
import {SecondRequestBuilder} from './second/';
import {SeriesSumRequestBuilder} from './seriesSum/';
import {SheetRequestBuilder} from './sheet/';
import {SheetsRequestBuilder} from './sheets/';
import {SignRequestBuilder} from './sign/';
import {SinRequestBuilder} from './sin/';
import {SinhRequestBuilder} from './sinh/';
import {Skew_pRequestBuilder} from './skew_p/';
import {SkewRequestBuilder} from './skew/';
import {SlnRequestBuilder} from './sln/';
import {SmallRequestBuilder} from './small/';
import {SqrtRequestBuilder} from './sqrt/';
import {SqrtPiRequestBuilder} from './sqrtPi/';
import {StandardizeRequestBuilder} from './standardize/';
import {StDev_PRequestBuilder} from './stDev_P/';
import {StDev_SRequestBuilder} from './stDev_S/';
import {StDevARequestBuilder} from './stDevA/';
import {StDevPARequestBuilder} from './stDevPA/';
import {SubstituteRequestBuilder} from './substitute/';
import {SubtotalRequestBuilder} from './subtotal/';
import {SumRequestBuilder} from './sum/';
import {SumIfRequestBuilder} from './sumIf/';
import {SumIfsRequestBuilder} from './sumIfs/';
import {SumSqRequestBuilder} from './sumSq/';
import {SydRequestBuilder} from './syd/';
import {T_Dist_2TRequestBuilder} from './t_Dist_2T/';
import {T_Dist_RTRequestBuilder} from './t_Dist_RT/';
import {T_DistRequestBuilder} from './t_Dist/';
import {T_Inv_2TRequestBuilder} from './t_Inv_2T/';
import {T_InvRequestBuilder} from './t_Inv/';
import {TRequestBuilder} from './t/';
import {TanRequestBuilder} from './tan/';
import {TanhRequestBuilder} from './tanh/';
import {TbillEqRequestBuilder} from './tbillEq/';
import {TbillPriceRequestBuilder} from './tbillPrice/';
import {TbillYieldRequestBuilder} from './tbillYield/';
import {TextRequestBuilder} from './text/';
import {TimeRequestBuilder} from './time/';
import {TimevalueRequestBuilder} from './timevalue/';
import {TodayRequestBuilder} from './today/';
import {TrimRequestBuilder} from './trim/';
import {TrimMeanRequestBuilder} from './trimMean/';
import {TrueRequestBuilder} from './true_escaped/';
import {TruncRequestBuilder} from './trunc/';
import {TypeRequestBuilder} from './type/';
import {UnicharRequestBuilder} from './unichar/';
import {UnicodeRequestBuilder} from './unicode/';
import {UpperRequestBuilder} from './upper/';
import {UsdollarRequestBuilder} from './usdollar/';
import {ValueRequestBuilder} from './value/';
import {Var_PRequestBuilder} from './var_P/';
import {Var_SRequestBuilder} from './var_S/';
import {VarARequestBuilder} from './varA/';
import {VarPARequestBuilder} from './varPA/';
import {VdbRequestBuilder} from './vdb/';
import {VlookupRequestBuilder} from './vlookup/';
import {WeekdayRequestBuilder} from './weekday/';
import {WeekNumRequestBuilder} from './weekNum/';
import {Weibull_DistRequestBuilder} from './weibull_Dist/';
import {WorkDay_IntlRequestBuilder} from './workDay_Intl/';
import {WorkDayRequestBuilder} from './workDay/';
import {XirrRequestBuilder} from './xirr/';
import {XnpvRequestBuilder} from './xnpv/';
import {XorRequestBuilder} from './xor/';
import {YearRequestBuilder} from './year/';
import {YearFracRequestBuilder} from './yearFrac/';
import {YieldRequestBuilder} from './yield/';
import {YieldDiscRequestBuilder} from './yieldDisc/';
import {YieldMatRequestBuilder} from './yieldMat/';
import {Z_TestRequestBuilder} from './z_Test/';
import {getPathParameters, HttpMethod, Parsable, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /workbooks/{driveItem-id}/workbook/functions  */
export class FunctionsRequestBuilder {
    public get abs(): AbsRequestBuilder {
        return new AbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get accrInt(): AccrIntRequestBuilder {
        return new AccrIntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get accrIntM(): AccrIntMRequestBuilder {
        return new AccrIntMRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get acos(): AcosRequestBuilder {
        return new AcosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get acosh(): AcoshRequestBuilder {
        return new AcoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get acot(): AcotRequestBuilder {
        return new AcotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get acoth(): AcothRequestBuilder {
        return new AcothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get amorDegrc(): AmorDegrcRequestBuilder {
        return new AmorDegrcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get amorLinc(): AmorLincRequestBuilder {
        return new AmorLincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get and(): AndRequestBuilder {
        return new AndRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get arabic(): ArabicRequestBuilder {
        return new ArabicRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get areas(): AreasRequestBuilder {
        return new AreasRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get asc(): AscRequestBuilder {
        return new AscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get asin(): AsinRequestBuilder {
        return new AsinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get asinh(): AsinhRequestBuilder {
        return new AsinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get atan(): AtanRequestBuilder {
        return new AtanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get atan2(): Atan2RequestBuilder {
        return new Atan2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get atanh(): AtanhRequestBuilder {
        return new AtanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get aveDev(): AveDevRequestBuilder {
        return new AveDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get average(): AverageRequestBuilder {
        return new AverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get averageA(): AverageARequestBuilder {
        return new AverageARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get averageIf(): AverageIfRequestBuilder {
        return new AverageIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get averageIfs(): AverageIfsRequestBuilder {
        return new AverageIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bahtText(): BahtTextRequestBuilder {
        return new BahtTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get base(): BaseRequestBuilder {
        return new BaseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get besselI(): BesselIRequestBuilder {
        return new BesselIRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get besselJ(): BesselJRequestBuilder {
        return new BesselJRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get besselK(): BesselKRequestBuilder {
        return new BesselKRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get besselY(): BesselYRequestBuilder {
        return new BesselYRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get beta_Dist(): Beta_DistRequestBuilder {
        return new Beta_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get beta_Inv(): Beta_InvRequestBuilder {
        return new Beta_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bin2Dec(): Bin2DecRequestBuilder {
        return new Bin2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bin2Hex(): Bin2HexRequestBuilder {
        return new Bin2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bin2Oct(): Bin2OctRequestBuilder {
        return new Bin2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get binom_Dist(): Binom_DistRequestBuilder {
        return new Binom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get binom_Dist_Range(): Binom_Dist_RangeRequestBuilder {
        return new Binom_Dist_RangeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get binom_Inv(): Binom_InvRequestBuilder {
        return new Binom_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bitand(): BitandRequestBuilder {
        return new BitandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bitlshift(): BitlshiftRequestBuilder {
        return new BitlshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bitor(): BitorRequestBuilder {
        return new BitorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bitrshift(): BitrshiftRequestBuilder {
        return new BitrshiftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get bitxor(): BitxorRequestBuilder {
        return new BitxorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ceiling_Math(): Ceiling_MathRequestBuilder {
        return new Ceiling_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ceiling_Precise(): Ceiling_PreciseRequestBuilder {
        return new Ceiling_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get char(): CharRequestBuilder {
        return new CharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chiSq_Dist(): ChiSq_DistRequestBuilder {
        return new ChiSq_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chiSq_Dist_RT(): ChiSq_Dist_RTRequestBuilder {
        return new ChiSq_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chiSq_Inv(): ChiSq_InvRequestBuilder {
        return new ChiSq_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get chiSq_Inv_RT(): ChiSq_Inv_RTRequestBuilder {
        return new ChiSq_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get choose(): ChooseRequestBuilder {
        return new ChooseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get clean(): CleanRequestBuilder {
        return new CleanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get code(): CodeRequestBuilder {
        return new CodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get columns(): ColumnsRequestBuilder {
        return new ColumnsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get combin(): CombinRequestBuilder {
        return new CombinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get combina(): CombinaRequestBuilder {
        return new CombinaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get complex(): ComplexRequestBuilder {
        return new ComplexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get concatenate(): ConcatenateRequestBuilder {
        return new ConcatenateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get confidence_Norm(): Confidence_NormRequestBuilder {
        return new Confidence_NormRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get confidence_T(): Confidence_TRequestBuilder {
        return new Confidence_TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get convert(): ConvertRequestBuilder {
        return new ConvertRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cos(): CosRequestBuilder {
        return new CosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cosh(): CoshRequestBuilder {
        return new CoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cot(): CotRequestBuilder {
        return new CotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coth(): CothRequestBuilder {
        return new CothRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get count(): CountRequestBuilder {
        return new CountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get countA(): CountARequestBuilder {
        return new CountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get countBlank(): CountBlankRequestBuilder {
        return new CountBlankRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get countIf(): CountIfRequestBuilder {
        return new CountIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get countIfs(): CountIfsRequestBuilder {
        return new CountIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coupDayBs(): CoupDayBsRequestBuilder {
        return new CoupDayBsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coupDays(): CoupDaysRequestBuilder {
        return new CoupDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coupDaysNc(): CoupDaysNcRequestBuilder {
        return new CoupDaysNcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coupNcd(): CoupNcdRequestBuilder {
        return new CoupNcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coupNum(): CoupNumRequestBuilder {
        return new CoupNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get coupPcd(): CoupPcdRequestBuilder {
        return new CoupPcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get csc(): CscRequestBuilder {
        return new CscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get csch(): CschRequestBuilder {
        return new CschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cumIPmt(): CumIPmtRequestBuilder {
        return new CumIPmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get cumPrinc(): CumPrincRequestBuilder {
        return new CumPrincRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get date(): DateRequestBuilder {
        return new DateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get datevalue(): DatevalueRequestBuilder {
        return new DatevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get daverage(): DaverageRequestBuilder {
        return new DaverageRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get day(): DayRequestBuilder {
        return new DayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get days(): DaysRequestBuilder {
        return new DaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get days360(): Days360RequestBuilder {
        return new Days360RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get db(): DbRequestBuilder {
        return new DbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dbcs(): DbcsRequestBuilder {
        return new DbcsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dcount(): DcountRequestBuilder {
        return new DcountRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dcountA(): DcountARequestBuilder {
        return new DcountARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ddb(): DdbRequestBuilder {
        return new DdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dec2Bin(): Dec2BinRequestBuilder {
        return new Dec2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dec2Hex(): Dec2HexRequestBuilder {
        return new Dec2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dec2Oct(): Dec2OctRequestBuilder {
        return new Dec2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get decimal(): DecimalRequestBuilder {
        return new DecimalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get degrees(): DegreesRequestBuilder {
        return new DegreesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get delta(): DeltaRequestBuilder {
        return new DeltaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get devSq(): DevSqRequestBuilder {
        return new DevSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dget(): DgetRequestBuilder {
        return new DgetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get disc(): DiscRequestBuilder {
        return new DiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dmax(): DmaxRequestBuilder {
        return new DmaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dmin(): DminRequestBuilder {
        return new DminRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dollar(): DollarRequestBuilder {
        return new DollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dollarDe(): DollarDeRequestBuilder {
        return new DollarDeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dollarFr(): DollarFrRequestBuilder {
        return new DollarFrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dproduct(): DproductRequestBuilder {
        return new DproductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dstDev(): DstDevRequestBuilder {
        return new DstDevRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dstDevP(): DstDevPRequestBuilder {
        return new DstDevPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dsum(): DsumRequestBuilder {
        return new DsumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get duration(): DurationRequestBuilder {
        return new DurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dvar(): DvarRequestBuilder {
        return new DvarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get dvarP(): DvarPRequestBuilder {
        return new DvarPRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ecma_Ceiling(): Ecma_CeilingRequestBuilder {
        return new Ecma_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get edate(): EdateRequestBuilder {
        return new EdateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get effect(): EffectRequestBuilder {
        return new EffectRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get eoMonth(): EoMonthRequestBuilder {
        return new EoMonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get erf(): ErfRequestBuilder {
        return new ErfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get erf_Precise(): Erf_PreciseRequestBuilder {
        return new Erf_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get erfC(): ErfCRequestBuilder {
        return new ErfCRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get erfC_Precise(): ErfC_PreciseRequestBuilder {
        return new ErfC_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get error_Type(): Error_TypeRequestBuilder {
        return new Error_TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get even(): EvenRequestBuilder {
        return new EvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get exact(): ExactRequestBuilder {
        return new ExactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get exp(): ExpRequestBuilder {
        return new ExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get expon_Dist(): Expon_DistRequestBuilder {
        return new Expon_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get f_Dist(): F_DistRequestBuilder {
        return new F_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get f_Dist_RT(): F_Dist_RTRequestBuilder {
        return new F_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get f_Inv(): F_InvRequestBuilder {
        return new F_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get f_Inv_RT(): F_Inv_RTRequestBuilder {
        return new F_Inv_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get fact(): FactRequestBuilder {
        return new FactRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get factDouble(): FactDoubleRequestBuilder {
        return new FactDoubleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get false_escaped(): FalseRequestBuilder {
        return new FalseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get find(): FindRequestBuilder {
        return new FindRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get findB(): FindBRequestBuilder {
        return new FindBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get fisher(): FisherRequestBuilder {
        return new FisherRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get fisherInv(): FisherInvRequestBuilder {
        return new FisherInvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get fixed(): FixedRequestBuilder {
        return new FixedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get floor_Math(): Floor_MathRequestBuilder {
        return new Floor_MathRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get floor_Precise(): Floor_PreciseRequestBuilder {
        return new Floor_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get fv(): FvRequestBuilder {
        return new FvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get fvschedule(): FvscheduleRequestBuilder {
        return new FvscheduleRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gamma(): GammaRequestBuilder {
        return new GammaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gamma_Dist(): Gamma_DistRequestBuilder {
        return new Gamma_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gamma_Inv(): Gamma_InvRequestBuilder {
        return new Gamma_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gammaLn(): GammaLnRequestBuilder {
        return new GammaLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gammaLn_Precise(): GammaLn_PreciseRequestBuilder {
        return new GammaLn_PreciseRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gauss(): GaussRequestBuilder {
        return new GaussRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get gcd(): GcdRequestBuilder {
        return new GcdRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get geoMean(): GeoMeanRequestBuilder {
        return new GeoMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get geStep(): GeStepRequestBuilder {
        return new GeStepRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get harMean(): HarMeanRequestBuilder {
        return new HarMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hex2Bin(): Hex2BinRequestBuilder {
        return new Hex2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hex2Dec(): Hex2DecRequestBuilder {
        return new Hex2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hex2Oct(): Hex2OctRequestBuilder {
        return new Hex2OctRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hlookup(): HlookupRequestBuilder {
        return new HlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hour(): HourRequestBuilder {
        return new HourRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hyperlink(): HyperlinkRequestBuilder {
        return new HyperlinkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get hypGeom_Dist(): HypGeom_DistRequestBuilder {
        return new HypGeom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get if_escaped(): IfRequestBuilder {
        return new IfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imAbs(): ImAbsRequestBuilder {
        return new ImAbsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imaginary(): ImaginaryRequestBuilder {
        return new ImaginaryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imArgument(): ImArgumentRequestBuilder {
        return new ImArgumentRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imConjugate(): ImConjugateRequestBuilder {
        return new ImConjugateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imCos(): ImCosRequestBuilder {
        return new ImCosRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imCosh(): ImCoshRequestBuilder {
        return new ImCoshRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imCot(): ImCotRequestBuilder {
        return new ImCotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imCsc(): ImCscRequestBuilder {
        return new ImCscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imCsch(): ImCschRequestBuilder {
        return new ImCschRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imDiv(): ImDivRequestBuilder {
        return new ImDivRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imExp(): ImExpRequestBuilder {
        return new ImExpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imLn(): ImLnRequestBuilder {
        return new ImLnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imLog10(): ImLog10RequestBuilder {
        return new ImLog10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imLog2(): ImLog2RequestBuilder {
        return new ImLog2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imPower(): ImPowerRequestBuilder {
        return new ImPowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imProduct(): ImProductRequestBuilder {
        return new ImProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imReal(): ImRealRequestBuilder {
        return new ImRealRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSec(): ImSecRequestBuilder {
        return new ImSecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSech(): ImSechRequestBuilder {
        return new ImSechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSin(): ImSinRequestBuilder {
        return new ImSinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSinh(): ImSinhRequestBuilder {
        return new ImSinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSqrt(): ImSqrtRequestBuilder {
        return new ImSqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSub(): ImSubRequestBuilder {
        return new ImSubRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imSum(): ImSumRequestBuilder {
        return new ImSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get imTan(): ImTanRequestBuilder {
        return new ImTanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get int(): IntRequestBuilder {
        return new IntRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get intRate(): IntRateRequestBuilder {
        return new IntRateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ipmt(): IpmtRequestBuilder {
        return new IpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get irr(): IrrRequestBuilder {
        return new IrrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isErr(): IsErrRequestBuilder {
        return new IsErrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isError(): IsErrorRequestBuilder {
        return new IsErrorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isEven(): IsEvenRequestBuilder {
        return new IsEvenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isFormula(): IsFormulaRequestBuilder {
        return new IsFormulaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isLogical(): IsLogicalRequestBuilder {
        return new IsLogicalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isNA(): IsNARequestBuilder {
        return new IsNARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isNonText(): IsNonTextRequestBuilder {
        return new IsNonTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isNumber(): IsNumberRequestBuilder {
        return new IsNumberRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get iso_Ceiling(): Iso_CeilingRequestBuilder {
        return new Iso_CeilingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isOdd(): IsOddRequestBuilder {
        return new IsOddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isoWeekNum(): IsoWeekNumRequestBuilder {
        return new IsoWeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ispmt(): IspmtRequestBuilder {
        return new IspmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isref(): IsrefRequestBuilder {
        return new IsrefRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get isText(): IsTextRequestBuilder {
        return new IsTextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get kurt(): KurtRequestBuilder {
        return new KurtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get large(): LargeRequestBuilder {
        return new LargeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get lcm(): LcmRequestBuilder {
        return new LcmRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get left(): LeftRequestBuilder {
        return new LeftRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get leftb(): LeftbRequestBuilder {
        return new LeftbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get len(): LenRequestBuilder {
        return new LenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get lenb(): LenbRequestBuilder {
        return new LenbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ln(): LnRequestBuilder {
        return new LnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get log(): LogRequestBuilder {
        return new LogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get log10(): Log10RequestBuilder {
        return new Log10RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get logNorm_Dist(): LogNorm_DistRequestBuilder {
        return new LogNorm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get logNorm_Inv(): LogNorm_InvRequestBuilder {
        return new LogNorm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get lookup(): LookupRequestBuilder {
        return new LookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get lower(): LowerRequestBuilder {
        return new LowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get match(): MatchRequestBuilder {
        return new MatchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get max(): MaxRequestBuilder {
        return new MaxRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get maxA(): MaxARequestBuilder {
        return new MaxARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mduration(): MdurationRequestBuilder {
        return new MdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get median(): MedianRequestBuilder {
        return new MedianRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mid(): MidRequestBuilder {
        return new MidRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get midb(): MidbRequestBuilder {
        return new MidbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get min(): MinRequestBuilder {
        return new MinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get minA(): MinARequestBuilder {
        return new MinARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get minute(): MinuteRequestBuilder {
        return new MinuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mirr(): MirrRequestBuilder {
        return new MirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mod(): ModRequestBuilder {
        return new ModRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get month(): MonthRequestBuilder {
        return new MonthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get mround(): MroundRequestBuilder {
        return new MroundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get multiNomial(): MultiNomialRequestBuilder {
        return new MultiNomialRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get n(): NRequestBuilder {
        return new NRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get na(): NaRequestBuilder {
        return new NaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get negBinom_Dist(): NegBinom_DistRequestBuilder {
        return new NegBinom_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get networkDays(): NetworkDaysRequestBuilder {
        return new NetworkDaysRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get networkDays_Intl(): NetworkDays_IntlRequestBuilder {
        return new NetworkDays_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get nominal(): NominalRequestBuilder {
        return new NominalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get norm_Dist(): Norm_DistRequestBuilder {
        return new Norm_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get norm_Inv(): Norm_InvRequestBuilder {
        return new Norm_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get norm_S_Dist(): Norm_S_DistRequestBuilder {
        return new Norm_S_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get norm_S_Inv(): Norm_S_InvRequestBuilder {
        return new Norm_S_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get not(): NotRequestBuilder {
        return new NotRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get now(): NowRequestBuilder {
        return new NowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get nper(): NperRequestBuilder {
        return new NperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get npv(): NpvRequestBuilder {
        return new NpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get numberValue(): NumberValueRequestBuilder {
        return new NumberValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oct2Bin(): Oct2BinRequestBuilder {
        return new Oct2BinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oct2Dec(): Oct2DecRequestBuilder {
        return new Oct2DecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oct2Hex(): Oct2HexRequestBuilder {
        return new Oct2HexRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get odd(): OddRequestBuilder {
        return new OddRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oddFPrice(): OddFPriceRequestBuilder {
        return new OddFPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oddFYield(): OddFYieldRequestBuilder {
        return new OddFYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oddLPrice(): OddLPriceRequestBuilder {
        return new OddLPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get oddLYield(): OddLYieldRequestBuilder {
        return new OddLYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get or(): OrRequestBuilder {
        return new OrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request  */
    private readonly pathParameters: Record<string, unknown>;
    public get pduration(): PdurationRequestBuilder {
        return new PdurationRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get percentile_Exc(): Percentile_ExcRequestBuilder {
        return new Percentile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get percentile_Inc(): Percentile_IncRequestBuilder {
        return new Percentile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get percentRank_Exc(): PercentRank_ExcRequestBuilder {
        return new PercentRank_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get percentRank_Inc(): PercentRank_IncRequestBuilder {
        return new PercentRank_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get permut(): PermutRequestBuilder {
        return new PermutRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get permutationa(): PermutationaRequestBuilder {
        return new PermutationaRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get phi(): PhiRequestBuilder {
        return new PhiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get pi(): PiRequestBuilder {
        return new PiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get pmt(): PmtRequestBuilder {
        return new PmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get poisson_Dist(): Poisson_DistRequestBuilder {
        return new Poisson_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get power(): PowerRequestBuilder {
        return new PowerRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get ppmt(): PpmtRequestBuilder {
        return new PpmtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get price(): PriceRequestBuilder {
        return new PriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get priceDisc(): PriceDiscRequestBuilder {
        return new PriceDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get priceMat(): PriceMatRequestBuilder {
        return new PriceMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get product(): ProductRequestBuilder {
        return new ProductRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get proper(): ProperRequestBuilder {
        return new ProperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get pv(): PvRequestBuilder {
        return new PvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get quartile_Exc(): Quartile_ExcRequestBuilder {
        return new Quartile_ExcRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get quartile_Inc(): Quartile_IncRequestBuilder {
        return new Quartile_IncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get quotient(): QuotientRequestBuilder {
        return new QuotientRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get radians(): RadiansRequestBuilder {
        return new RadiansRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rand(): RandRequestBuilder {
        return new RandRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get randBetween(): RandBetweenRequestBuilder {
        return new RandBetweenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rank_Avg(): Rank_AvgRequestBuilder {
        return new Rank_AvgRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rank_Eq(): Rank_EqRequestBuilder {
        return new Rank_EqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rate(): RateRequestBuilder {
        return new RateRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get received(): ReceivedRequestBuilder {
        return new ReceivedRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get replace(): ReplaceRequestBuilder {
        return new ReplaceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get replaceB(): ReplaceBRequestBuilder {
        return new ReplaceBRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rept(): ReptRequestBuilder {
        return new ReptRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests.  */
    private readonly requestAdapter: RequestAdapter;
    public get right(): RightRequestBuilder {
        return new RightRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rightb(): RightbRequestBuilder {
        return new RightbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get roman(): RomanRequestBuilder {
        return new RomanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get round(): RoundRequestBuilder {
        return new RoundRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get roundDown(): RoundDownRequestBuilder {
        return new RoundDownRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get roundUp(): RoundUpRequestBuilder {
        return new RoundUpRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rows(): RowsRequestBuilder {
        return new RowsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get rri(): RriRequestBuilder {
        return new RriRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sec(): SecRequestBuilder {
        return new SecRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sech(): SechRequestBuilder {
        return new SechRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get second(): SecondRequestBuilder {
        return new SecondRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get seriesSum(): SeriesSumRequestBuilder {
        return new SeriesSumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sheet(): SheetRequestBuilder {
        return new SheetRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sheets(): SheetsRequestBuilder {
        return new SheetsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sign(): SignRequestBuilder {
        return new SignRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sin(): SinRequestBuilder {
        return new SinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sinh(): SinhRequestBuilder {
        return new SinhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get skew(): SkewRequestBuilder {
        return new SkewRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get skew_p(): Skew_pRequestBuilder {
        return new Skew_pRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sln(): SlnRequestBuilder {
        return new SlnRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get small(): SmallRequestBuilder {
        return new SmallRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sqrt(): SqrtRequestBuilder {
        return new SqrtRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sqrtPi(): SqrtPiRequestBuilder {
        return new SqrtPiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get standardize(): StandardizeRequestBuilder {
        return new StandardizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stDev_P(): StDev_PRequestBuilder {
        return new StDev_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stDev_S(): StDev_SRequestBuilder {
        return new StDev_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stDevA(): StDevARequestBuilder {
        return new StDevARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get stDevPA(): StDevPARequestBuilder {
        return new StDevPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get substitute(): SubstituteRequestBuilder {
        return new SubstituteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get subtotal(): SubtotalRequestBuilder {
        return new SubtotalRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sum(): SumRequestBuilder {
        return new SumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sumIf(): SumIfRequestBuilder {
        return new SumIfRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sumIfs(): SumIfsRequestBuilder {
        return new SumIfsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get sumSq(): SumSqRequestBuilder {
        return new SumSqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get syd(): SydRequestBuilder {
        return new SydRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get t(): TRequestBuilder {
        return new TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get t_Dist(): T_DistRequestBuilder {
        return new T_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get t_Dist_2T(): T_Dist_2TRequestBuilder {
        return new T_Dist_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get t_Dist_RT(): T_Dist_RTRequestBuilder {
        return new T_Dist_RTRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get t_Inv(): T_InvRequestBuilder {
        return new T_InvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get t_Inv_2T(): T_Inv_2TRequestBuilder {
        return new T_Inv_2TRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tan(): TanRequestBuilder {
        return new TanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tanh(): TanhRequestBuilder {
        return new TanhRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tbillEq(): TbillEqRequestBuilder {
        return new TbillEqRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tbillPrice(): TbillPriceRequestBuilder {
        return new TbillPriceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get tbillYield(): TbillYieldRequestBuilder {
        return new TbillYieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get text(): TextRequestBuilder {
        return new TextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get time(): TimeRequestBuilder {
        return new TimeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get timevalue(): TimevalueRequestBuilder {
        return new TimevalueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get today(): TodayRequestBuilder {
        return new TodayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get trim(): TrimRequestBuilder {
        return new TrimRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get trimMean(): TrimMeanRequestBuilder {
        return new TrimMeanRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get true_escaped(): TrueRequestBuilder {
        return new TrueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get trunc(): TruncRequestBuilder {
        return new TruncRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get type(): TypeRequestBuilder {
        return new TypeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unichar(): UnicharRequestBuilder {
        return new UnicharRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get unicode(): UnicodeRequestBuilder {
        return new UnicodeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get upper(): UpperRequestBuilder {
        return new UpperRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder  */
    private readonly urlTemplate: string;
    public get usdollar(): UsdollarRequestBuilder {
        return new UsdollarRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get value(): ValueRequestBuilder {
        return new ValueRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get var_P(): Var_PRequestBuilder {
        return new Var_PRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get var_S(): Var_SRequestBuilder {
        return new Var_SRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get varA(): VarARequestBuilder {
        return new VarARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get varPA(): VarPARequestBuilder {
        return new VarPARequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get vdb(): VdbRequestBuilder {
        return new VdbRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get vlookup(): VlookupRequestBuilder {
        return new VlookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get weekday(): WeekdayRequestBuilder {
        return new WeekdayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get weekNum(): WeekNumRequestBuilder {
        return new WeekNumRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get weibull_Dist(): Weibull_DistRequestBuilder {
        return new Weibull_DistRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workDay(): WorkDayRequestBuilder {
        return new WorkDayRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get workDay_Intl(): WorkDay_IntlRequestBuilder {
        return new WorkDay_IntlRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get xirr(): XirrRequestBuilder {
        return new XirrRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get xnpv(): XnpvRequestBuilder {
        return new XnpvRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get xor(): XorRequestBuilder {
        return new XorRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get year(): YearRequestBuilder {
        return new YearRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get yearFrac(): YearFracRequestBuilder {
        return new YearFracRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get yield(): YieldRequestBuilder {
        return new YieldRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get yieldDisc(): YieldDiscRequestBuilder {
        return new YieldDiscRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get yieldMat(): YieldMatRequestBuilder {
        return new YieldMatRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    public get z_Test(): Z_TestRequestBuilder {
        return new Z_TestRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new FunctionsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/workbooks/{driveItem_id}/workbook/functions{?select,expand}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Delete navigation property functions for workbooks
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createDeleteRequestInformation(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        if(h) requestInfo.headers = h;
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Get functions from workbooks
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @returns a RequestInformation
     */
    public createGetRequestInformation(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        if(h) requestInfo.headers = h;
        q && requestInfo.setQueryStringParametersFromRawObject(q);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Update the navigation property functions in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @returns a RequestInformation
     */
    public createPatchRequestInformation(body: WorkbookFunctions | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        if(h) requestInfo.headers = h;
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        o && requestInfo.addRequestOptions(o);
        return requestInfo;
    };
    /**
     * Delete navigation property functions for workbooks
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public delete(h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        const requestInfo = this.createDeleteRequestInformation(
            h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Get functions from workbooks
     * @param h Request headers
     * @param o Request options
     * @param q Request query parameters
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of WorkbookFunctions
     */
    public get(q?: {
                    expand?: string[],
                    select?: string[]
                    } | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<WorkbookFunctions | undefined> {
        const requestInfo = this.createGetRequestInformation(
            q, h, o
        );
        return this.requestAdapter?.sendAsync<WorkbookFunctions>(requestInfo, WorkbookFunctions, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
    /**
     * Update the navigation property functions in workbooks
     * @param body 
     * @param h Request headers
     * @param o Request options
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     */
    public patch(body: WorkbookFunctions | undefined, h?: Record<string, string> | undefined, o?: Record<string,RequestOption> | undefined, responseHandler?: ResponseHandler | undefined) : Promise<void> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, h, o
        );
        return this.requestAdapter?.sendNoResponseContentAsync(requestInfo, responseHandler, undefined) ?? Promise.reject(new Error('http core is null'));
    };
}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.distribution = void 0;
var proto_1 = require("../../proto");
var types_1 = require("../../types");
exports.distribution = __importStar(require("./module"));
types_1.codec.register('/cosmos.distribution.v1beta1.CommunityPoolSpendProposal', proto_1.cosmos.distribution.v1beta1.CommunityPoolSpendProposal);
types_1.codec.register('/cosmos.distribution.v1beta1.MsgFundCommunityPool', proto_1.cosmos.distribution.v1beta1.MsgFundCommunityPool);
types_1.codec.register('/cosmos.distribution.v1beta1.MsgSetWithdrawAddres', proto_1.cosmos.distribution.v1beta1.MsgSetWithdrawAddress);
types_1.codec.register('/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward', proto_1.cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward);
types_1.codec.register('/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission', proto_1.cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission);

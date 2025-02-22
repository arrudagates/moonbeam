import { Perbill } from "./common";

export const SPECS_PATH = `./moonbeam-test-specs`;

export const DEBUG_MODE = process.env.DEBUG_MODE || false;
export const DISPLAY_LOG = process.env.MOONBEAM_LOG || false;
export const MOONBEAM_LOG = process.env.MOONBEAM_LOG || "info";

export const BASE_PATH = process.env.BASE_PATH;
export const CUSTOM_SPEC_PATH = process.env.CUSTOM_SPEC_PATH;
export const BINARY_PATH = process.env.BINARY_PATH || `../target/release/moonbeam`;
export const RELAY_BINARY_PATH = process.env.RELAY_BINARY_PATH || `../target/release/polkadot`;
export const RELAY_LOG = process.env.RELAY_LOG;

// Is undefined by default as the path is dependent of the runtime.
export const OVERRIDE_RUNTIME_PATH = process.env["OVERRIDE_RUNTIME_PATH"] || undefined;
export const SPAWNING_TIME = 20000;
export const ETHAPI_CMD = process.env.ETHAPI_CMD || "";
export const WASM_RUNTIME_OVERRIDES = process.env.WASM_RUNTIME_OVERRIDES || "";

export const RELAY_CHAIN_NODE_NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Ferdie", "One"];

// Test variables
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const TREASURY_ACCOUNT = "0x6d6f646c70632f74727372790000000000000000";
export const GLMR = 1_000_000_000_000_000_000n;
export const MILLIGLMR = 1_000_000_000_000_000n;
export const MICROGLMR = 1_000_000_000_000n;
export const DEFAULT_GENESIS_BALANCE = 2n ** 80n;
export const DEFAULT_GENESIS_STAKING = 1_000n * GLMR;
export const DEFAULT_GENESIS_MAPPING = 100n * GLMR;
export const PROPOSAL_AMOUNT = 1000n * GLMR;
export const VOTE_AMOUNT = 10n * GLMR;
export const MIN_GLMR_STAKING = 1000n * GLMR;
export const MIN_GLMR_DELEGATOR = 1n * GLMR;

// Maximum PoV size in bytes allowed for a manual sealing dev block
export const MAX_BLOCK_DEV_POV = 4 * 1024 * 1024 + 512;

// Current gas per second
export const GAS_PER_SECOND = 40_000_000;
// The real computation is 1_000_000_000_000 / 40_000_000, but we simplify to avoid bigint.
export const GAS_PER_WEIGHT = 1_000_000 / 40;

// Our weight limit is 500ms.
export const BLOCK_TX_LIMIT = GAS_PER_SECOND * 0.5;

// Current implementation is limiting block transactions to 75% of the block gas limit
export const BLOCK_TX_GAS_LIMIT = BLOCK_TX_LIMIT * 0.75;
export const EXTRINSIC_BASE_WEIGHT = 250_000_000;

// Maximum extrinsic weight is taken from the max allowed transaction weight per block,
// minus the block initialization (10%) and minus the extrinsic base cost.
export const EXTRINSIC_GAS_LIMIT = BLOCK_TX_GAS_LIMIT - BLOCK_TX_LIMIT * 0.1;

// Weight per gas mapping
export const WEIGHT_PER_GAS = 1_000_000_000_000n / 40_000_000n;

export const MIN_GAS_PRICE = 10_000_000_000n;

export const PRECOMPILE_PARACHAIN_STAKING_ADDRESS = "0x0000000000000000000000000000000000000800";
export const PRECOMPILE_CROWDLOAN_REWARDS_ADDRESS = "0x0000000000000000000000000000000000000801";
export const PRECOMPILE_NATIVE_ERC20_ADDRESS = "0x0000000000000000000000000000000000000802";
export const PRECOMPILE_DEMOCRACY_ADDRESS = "0x0000000000000000000000000000000000000803";
export const PRECOMPILE_XTOKENS_ADDRESS = "0x0000000000000000000000000000000000000804";
export const PRECOMPILE_RELAY_ENCODER_ADDRESS = "0x0000000000000000000000000000000000000805";
export const PRECOMPILE_XCM_TRANSACTOR_ADDRESS_V1 = "0x0000000000000000000000000000000000000806";
export const PRECOMPILE_AUTHOR_MAPPING_ADDRESS = "0x0000000000000000000000000000000000000807";
export const PRECOMPILE_BATCH_ADDRESS = "0x0000000000000000000000000000000000000808";
export const PRECOMPILE_RANDOMNESS_ADDRESS = "0x0000000000000000000000000000000000000809";
export const PRECOMPILE_CALL_PERMIT_ADDRESS = "0x000000000000000000000000000000000000080a";
export const PRECOMPILE_PROXY_ADDRESS = "0x000000000000000000000000000000000000080b";
export const PRECOMPILE_XCM_UTILS_ADDRESS = "0x000000000000000000000000000000000000080c";
export const PRECOMPILE_XCM_TRANSACTOR_ADDRESS_V2 = "0x000000000000000000000000000000000000080d";
export const PRECOMPILE_COUNCIL_ADDRESS = "0x000000000000000000000000000000000000080e";
export const PRECOMPILE_TECH_COMMITTEE_ADDRESS = "0x000000000000000000000000000000000000080f";
export const PRECOMPILE_TREASURY_COUNCIL_ADDRESS = "0x0000000000000000000000000000000000000810";
export const PRECOMPILE_DISPATCH_ADDRESS = "0x0000000000000000000000000000000000000401";
export const PRECOMPILE_REFERENDA_ADDRESS = "0x0000000000000000000000000000000000000811";
export const PRECOMPILE_CONVICTION_VOTING_ADDRESS = "0x0000000000000000000000000000000000000812";
export const PRECOMPILE_PREIMAGE_ADDRESS = "0x0000000000000000000000000000000000000813";
export const PRECOMPILE_OPEN_TECH_COMMITTEE_ADDRESS = "0x0000000000000000000000000000000000000814";
export const PRECOMPILE_GMP_ADDRESS = "0x0000000000000000000000000000000000000816";

export const MINUTES = 60 / 12;
export const HOURS = MINUTES * 60;
export const DAYS = HOURS * 24;

export const TWO_MINS = 2 * 60 * 1000;
export const FIVE_MINS = 5 * 60 * 1000;
export const TEN_MINS = 10 * 60 * 1000;
export const THIRTY_MINS = 30 * 60 * 1000;
export const ONE_HOURS = 60 * 60 * 1000;
export const TWO_HOURS = 2 * 60 * 60 * 1000;

export const CONTRACT_RANDOMNESS_STATUS_DOES_NOT_EXISTS = 0;
export const CONTRACT_RANDOMNESS_STATUS_PENDING = 1;
export const CONTRACT_RANDOMNESS_STATUS_READY = 2;
export const CONTRACT_RANDOMNESS_STATUS_EXPIRED = 3;

export const CONTRACT_PROXY_TYPE_ANY = 0;
export const CONTRACT_PROXY_TYPE_NON_TRANSFER = 1;
export const CONTRACT_PROXY_TYPE_GOVERNANCE = 2;
export const CONTRACT_PROXY_TYPE_STAKING = 3;
export const CONTRACT_PROXY_TYPE_CANCEL_PROXY = 4;
export const CONTRACT_PROXY_TYPE_BALANCES = 5;
export const CONTRACT_PROXY_TYPE_AUTHOR_MAPPING = 6;
export const CONTRACT_PROXY_TYPE_IDENTITY_JUDGEMENT = 7;

export const MAX_BLOCK_WEIGHT = 500_000_000_000;

// This is the target fill perbill amount accounting for base extrinsic fee, i.e. 187,000,000
// Defined as a runtime constant: "TargetBlockFullness"
export const TARGET_FILL_AMOUNT =
  ((MAX_BLOCK_WEIGHT * 0.75 * 0.25 - EXTRINSIC_BASE_WEIGHT) / MAX_BLOCK_WEIGHT) * 1_000_000_000;

export const TARGET_FILL_PERMILL = 0.25 * 1_000_000; // Equivalent to 25%
export const WEIGHT_FEE = 50n * 1000n;

export const RUNTIME_CONSTANTS = {
  MOONBASE: {
    MIN_FEE_MULTIPLIER: "100000000000000000",
    MAX_FEE_MULTIPLIER: "100000000000000000000000",
    MIN_BASE_FEE_IN_WEI: "125000000",
    MAX_BASE_FEE_IN_WEI: "125000000000000",
  },
  MOONRIVER: {
    MIN_FEE_MULTIPLIER: "1000000000000000000",
    MAX_FEE_MULTIPLIER: "100000000000000000000000",
    MIN_BASE_FEE_IN_WEI: "1250000000",
    MAX_BASE_FEE_IN_WEI: "125000000000000",
  },
  MOONBEAM: {
    MIN_FEE_MULTIPLIER: "1000000000000000000",
    MAX_FEE_MULTIPLIER: "100000000000000000000000",
    MIN_BASE_FEE_IN_WEI: "125000000000",
    MAX_BASE_FEE_IN_WEI: "12500000000000000",
  },
};

export const DUMMY_REVERT_BYTECODE = "0x60006000fd";

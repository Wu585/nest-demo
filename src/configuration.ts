import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";
import * as _ from "lodash";

const YAML_COMMON_CONFIG__FILENAME = "config.yml";

const filePath = join(__dirname, "../config", YAML_COMMON_CONFIG__FILENAME);

const commonConfig = yaml.load(readFileSync(filePath, "utf-8"));

const envPath = join(__dirname, "../config", `config.${process.env.NODE_ENV || "development"}.yml`);

const envConfig = yaml.load(readFileSync(envPath, "utf-8"));

export default () => _.merge(commonConfig, envConfig);


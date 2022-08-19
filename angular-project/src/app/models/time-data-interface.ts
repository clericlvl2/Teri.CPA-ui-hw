export interface Activity {
  title: string,
  timeframes: {
    daily: ActivityPeriod,
    weekly: ActivityPeriod,
    monthly: ActivityPeriod
  }
}

export interface ActivityPeriod {
  current: number,
  previous: number
}

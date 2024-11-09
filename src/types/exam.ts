// 응시연도
export const START_YEAR = 2005;
export const END_YEAR = 2024;

export type ValidYearType =
  | typeof START_YEAR
  | 2006
  | 2007
  | 2008
  | 2009
  | 2010
  | 2011
  | 2012
  | 2013
  | 2014
  | 2015
  | 2016
  | 2017
  | 2018
  | 2019
  | 2020
  | 2021
  | 2022
  | typeof END_YEAR;

export type ExamSubjectType = "k" | "m" | "e";
export type CurrentTime = ExamSubjectType | "lunch" | "grading";

export type ExamImgType = "q" | "a";

export type ValidAnswerType = 1 | 2 | 3 | 4 | 5;

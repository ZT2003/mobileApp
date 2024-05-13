import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}

export interface Idea {
  title: string,
  topic: string[],
  date: Date,
  summary: string,
  images: string[]
}

export interface Article {
  title: string,
  topic: string[],
  date: Date,
  summary: string,
  images: string[]
}

export interface Book {
  title: string,
  topic: string[],
  date: Date,
  chapters: {summary: string, images: string[]}[]
}
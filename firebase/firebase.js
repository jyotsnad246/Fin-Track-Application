/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configure Firebase.
const firebaseConfig = {
  // Insert your Firebase project's configuration here
  apiKey: "AIzaSyDGGwuAyT3IZEl9TIUsVe1fU4mazvajBU0",
  authDomain: "finance-tracker-b07eb.firebaseapp.com",
  projectId: "finance-tracker-b07eb",
  storageBucket: "finance-tracker-b07eb.appspot.com",
  messagingSenderId: "31338402811",
  appId: "1:31338402811:web:e6f5589cd3a0ad3510315e",
  measurementId: "G-MSWFYW4HF2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 

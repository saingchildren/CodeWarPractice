# Problem Description

Given a string of words, find the highest scoring word based on the following scoring rule:

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
The score of a word is the sum of the scores of its letters.
If two words have the same score, return the word that appears earlier in the original string.
Function Signature: def high_scoring_word(s: str) -> str:

### Input

A string of words s.

### Output

The highest scoring word as a string.

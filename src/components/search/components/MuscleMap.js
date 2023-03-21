import React, { useState } from "react";
import "./styles.css";

const MuscleMap = (props) => {
  const [muscleGroups, setMuscleGroups] = useState({
    primary: "",
    secondary: [],
  });
  const [view, setView] = useState("front");

  const muscleGroupNames = {
    neck: "neck",
    abdominals: "abdominals",
    upperarms: "biceps",
    chest: "chest",
    calves: "calves",
    traps: "traps",
    triceps: "triceps",
    quadriceps: "quadriceps",

    lats: "lats",
    hamstrings: "hamstrings",
    glutes: "glutes",
    forearms: "forearms",
    abductors: "back9",
  };
  const clickedMuscleGroup = (e) => {
    const clickedGroup = e.target.className.baseVal;
    setMuscleGroups({ ...muscleGroups, primary: clickedGroup });
    props.func(clickedGroup);
  };
  const switchView = (e) => {
    const toView = e.target.id;
    setView(toView);
  };

  return (
    <div id="muscleMan" style={{ height: 600 + "px", width: 300 + "px" }}>
      <h2>Muscle Groups</h2>
      <div>
        <button id="front" onClick={switchView}>
          Front
        </button>
        <button onClick={switchView} id="back">
          Back
        </button>
      </div>
      {view === "front" ? (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 460.000000 897.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,897.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <g
              style={{ fill: "white", stroke: "black", strokeWidth: 10 + "px" }}
            >
              <path
                d="M2062 8770 c-180 -48 -235 -128 -236 -340 -1 -99 -4 -118 -20 -134
                        -15 -15 -17 -27 -12 -75 6 -53 39 -138 72 -189 12 -18 19 -21 29 -12 10 8 13
                        -3 17 -59 3 -55 8 -75 26 -94 25 -26 29 -80 12 -182 -8 -54 -14 -65 -61 -108
                        -67 -63 -161 -126 -221 -149 -39 -14 -72 -17 -180 -15 -129 2 -134 1 -188 -27
                        -83 -43 -203 -168 -242 -252 -31 -65 -33 -76 -36 -204 -2 -74 1 -182 6 -239 9
                        -104 9 -105 -20 -170 -44 -98 -68 -202 -68 -297 l0 -83 -53 -74 c-121 -169
                        -175 -309 -212 -549 -46 -302 -123 -636 -166 -725 -19 -39 -31 -48 -113 -88
                        -100 -49 -147 -91 -193 -171 -16 -29 -52 -70 -81 -93 -29 -23 -52 -50 -52 -60
                        0 -59 90 -50 161 16 26 25 53 42 58 38 26 -16 8 -73 -65 -209 -87 -161 -96
                        -189 -66 -205 29 -16 43 -7 76 47 58 93 120 176 124 164 5 -15 -10 -61 -61
                        -190 -34 -87 -38 -106 -29 -127 31 -68 101 16 177 213 16 39 30 70 32 68 2 -2
                        -3 -46 -12 -97 -9 -52 -15 -121 -13 -154 3 -56 5 -60 27 -60 20 0 27 9 42 53
                        10 29 28 102 40 161 20 104 33 141 42 131 3 -3 10 -56 15 -119 7 -76 15 -119
                        25 -129 28 -28 47 24 62 170 7 73 19 147 25 163 32 82 70 284 70 372 0 50 5
                        115 12 145 7 30 87 204 184 398 188 375 215 448 234 621 13 131 24 171 55 208
                        35 41 80 141 108 241 33 113 48 112 64 -7 15 -115 28 -164 60 -227 32 -63 40
                        -143 31 -331 -13 -304 -37 -501 -73 -610 -55 -168 -90 -371 -127 -740 -12
                        -123 -5 -549 13 -735 15 -172 44 -305 84 -386 41 -84 44 -130 20 -294 -11 -67
                        -15 -155 -13 -249 2 -110 -2 -168 -15 -236 -10 -51 -21 -161 -24 -255 -10
                        -274 20 -527 106 -890 21 -91 23 -141 19 -462 l-3 -207 -72 -73 c-73 -74 -103
                        -125 -103 -174 0 -31 55 -94 83 -94 11 0 31 -9 45 -21 17 -13 34 -18 49 -14
                        14 3 34 -2 49 -12 22 -14 31 -15 57 -5 24 9 34 9 46 -2 31 -26 68 -28 92 -4
                        68 72 72 83 70 179 -1 57 4 114 15 156 10 39 14 85 11 112 -3 25 -1 70 3 98 7
                        41 5 65 -8 105 -14 44 -17 93 -17 278 0 273 13 374 68 540 l42 125 0 200 c-1
                        154 -6 236 -24 358 -25 174 -24 213 10 302 20 53 22 80 24 240 2 158 5 193 28
                        285 38 149 143 604 157 675 7 36 10 134 8 243 -3 159 -1 181 12 175 19 -8 51
                        -8 70 0 13 6 15 -16 12 -175 -2 -107 1 -208 8 -243 13 -68 105 -466 152 -655
                        28 -114 31 -141 33 -305 2 -167 4 -186 28 -256 33 -91 33 -106 5 -289 -17
                        -113 -21 -192 -22 -355 l0 -210 41 -120 c55 -159 68 -262 68 -535 0 -187 -3
                        -234 -18 -280 -13 -44 -15 -66 -8 -105 5 -28 7 -71 4 -97 -3 -28 1 -74 12
                        -118 12 -51 16 -93 12 -144 -6 -83 3 -108 57 -166 32 -35 43 -41 65 -35 14 4
                        33 13 42 21 12 11 21 11 46 2 26 -10 35 -9 57 5 15 10 35 15 49 12 15 -4 32 1
                        49 14 14 12 34 21 45 21 24 0 83 62 83 86 0 58 -25 101 -102 181 l-80 81 2 59
                        c3 77 3 224 0 381 -2 116 0 141 33 282 98 421 121 796 68 1104 -17 96 -20 142
                        -15 240 4 87 2 150 -10 225 -24 159 -22 217 13 282 58 107 85 272 102 614 6
                        127 9 302 5 390 -11 304 -66 673 -130 866 -38 113 -56 260 -75 606 -11 193 -4
                        268 33 342 31 60 44 110 59 224 16 119 31 120 64 7 27 -95 78 -214 100 -232
                        30 -24 44 -72 59 -195 25 -201 48 -263 229 -624 90 -179 173 -357 184 -394 15
                        -49 21 -94 21 -167 0 -75 7 -129 29 -221 16 -67 35 -135 41 -152 6 -16 18 -91
                        25 -165 15 -147 19 -166 40 -174 25 -9 37 23 47 136 14 161 20 160 55 -5 13
                        -63 31 -138 41 -168 15 -46 21 -54 42 -54 23 0 25 4 28 58 2 31 -4 98 -12 147
                        -22 123 -20 127 18 35 48 -117 84 -184 113 -211 33 -30 51 -30 64 -1 9 19 4
                        40 -24 113 -48 124 -69 192 -65 206 4 12 66 -71 124 -164 16 -26 35 -50 42
                        -53 19 -7 52 13 52 32 0 9 -36 85 -80 169 -77 147 -95 204 -69 219 5 4 32 -14
                        58 -38 71 -67 151 -76 159 -19 2 15 -11 32 -50 62 -29 24 -65 65 -81 94 -49
                        87 -116 143 -217 182 -25 9 -53 24 -62 32 -47 40 -139 403 -189 742 -10 74
                        -28 171 -40 215 -25 101 -101 258 -173 358 l-56 77 0 78 c0 100 -20 192 -64
                        290 l-35 80 11 104 c5 56 8 164 6 240 -4 130 -6 139 -38 205 -41 83 -160 207
                        -240 249 -54 28 -59 29 -188 27 -108 -2 -141 1 -180 15 -60 23 -154 86 -221
                        149 -44 41 -53 56 -61 102 -17 93 -13 162 11 187 17 18 23 40 27 94 3 46 8 67
                        14 58 11 -17 31 7 64 77 48 102 55 197 15 210 -17 5 -18 10 -9 48 12 52 4 165
                        -17 234 -38 125 -155 192 -350 199 -78 3 -116 0 -173 -16z"
              />
            </g>
            <g style={{ fill: "rgb(129, 24, 24)" }}>
              <path
                d="M2105 8774 c-127 -32 -199 -75 -232 -138 -43 -84 -55 -219 -28 -322
                        8 -32 18 -87 22 -123 8 -86 21 -55 22 55 1 67 5 89 27 130 14 27 30 76 35 108
                        4 33 15 66 24 75 34 34 436 36 476 2 12 -10 22 -39 28 -79 6 -35 20 -80 33
                        -100 18 -29 23 -55 26 -132 2 -52 8 -99 13 -104 5 -6 9 3 9 22 0 18 9 74 21
                        125 38 168 10 328 -71 401 -57 51 -150 78 -280 82 -58 1 -114 0 -125 -2z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.neck
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.neck}
                d="M1885 7502 c-32 -28 -91 -70 -131 -93 -41 -24 -74 -47 -74 -50 0 -15
                        43 -22 180 -28 80 -4 155 -13 167 -19 12 -7 31 -12 42 -12 19 0 19 3 -11 68
                        -17 37 -41 92 -53 122 -30 72 -47 74 -120 12z"
              />
              <path
                className={muscleGroupNames.neck}
                d="M2436 7541 c-4 -6 -5 -11 -2 -11 7 0 -24 -78 -63 -159 -17 -36 -31
                        -68 -31 -73 0 -13 25 -9 71 12 35 15 66 20 147 20 103 0 192 15 192 31 0 5 -4
                        9 -9 9 -14 0 -156 96 -199 134 -41 38 -95 56 -106 37z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.forearms
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.forearms}
                d="M1370 7371 c-96 -31 -232 -147 -278 -236 -37 -73 -37 -160 1 -237 30
                        -62 99 -130 149 -147 28 -10 33 -8 60 22 105 112 119 140 123 255 2 46 9 97
                        15 113 14 33 86 84 143 101 44 13 53 27 37 57 -26 50 -182 95 -250 72z"
              />
              <path
                className={muscleGroupNames.forearms}
                d="M2945 7374 c-43 -11 -81 -28 -113 -52 -46 -34 -40 -59 20 -83 117
                        -46 148 -84 148 -186 1 -121 18 -163 114 -265 41 -45 45 -47 74 -37 49 17 119
                        85 148 145 35 71 36 157 4 232 -27 63 -145 179 -221 218 -50 25 -132 38 -174
                        28z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.chest
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.chest}
                d="M1720 7263 c-110 -38 -199 -120 -225 -205 -30 -104 -14 -312 31 -401
                        23 -44 84 -107 124 -127 20 -10 74 -26 120 -36 71 -14 94 -15 148 -5 113 21
                        194 75 225 151 20 47 40 278 31 359 -15 148 -69 250 -142 271 -58 16 -259 12
                        -312 -7z"
              />
              <path
                className={muscleGroupNames.chest}
                d="M2396 7270 c-69 -22 -119 -110 -138 -242 -13 -90 4 -340 27 -393 19
                        -44 72 -90 140 -121 49 -23 74 -28 140 -28 265 -1 395 151 383 449 -7 169 -46
                        232 -190 307 -61 31 -67 32 -198 35 -74 1 -148 -2 -164 -7z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.upperarms
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.upperarms}
                d="M1372 6788 c-16 -44 -62 -73 -147 -91 -62 -14 -75 -21 -107 -59 -21
                        -24 -56 -79 -78 -123 -47 -95 -62 -176 -58 -320 l3 -100 30 -3 c36 -4 65 -28
                        65 -54 0 -28 27 -76 50 -88 17 -9 25 -6 51 22 71 78 158 252 219 440 53 164
                        57 201 30 316 -23 98 -38 114 -58 60z"
              />
              <path
                className={muscleGroupNames.upperarms}
                d="M3012 6783 c-23 -81 -34 -159 -29 -203 16 -131 143 -441 233 -566 63
                        -89 92 -92 114 -15 14 50 33 71 77 86 l38 13 3 89 c4 107 -12 228 -39 290 -31
                        73 -104 176 -139 196 -22 13 -41 17 -68 13 -51 -9 -92 19 -128 83 -15 28 -33
                        51 -39 51 -7 0 -17 -17 -23 -37z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.lats
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.lats}
                d="M1493 6573 c-5 -16 -8 -98 -7 -183 1 -167 10 -212 58 -275 22 -28 25
                        -45 31 -176 4 -93 1 -244 -9 -427 -9 -156 -13 -289 -9 -295 4 -7 51 -60 106
                        -119 66 -72 110 -111 133 -118 48 -16 55 -7 39 48 -31 104 -49 402 -52 881
                        l-4 464 -29 34 c-17 19 -30 38 -30 42 0 5 -30 27 -67 49 -38 22 -81 54 -97 71
                        -37 38 -53 39 -63 4z"
              />
              <path
                className={muscleGroupNames.lats}
                d="M2874 6569 c-16 -17 -59 -49 -96 -71 -37 -22 -70 -48 -73 -59 -3 -10
                        -17 -27 -31 -38 l-24 -19 -3 -459 c-3 -474 -22 -789 -52 -891 -17 -57 -9 -68
                        38 -53 25 9 67 46 140 126 l105 114 -4 93 c-2 51 -9 156 -15 233 -16 197 -8
                        529 13 552 46 52 62 106 69 233 4 69 4 158 1 198 -6 84 -19 92 -68 41z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.abdominals
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className="tummy"
                d="M1991 6468 c-81 -38 -139 -71 -148 -85 -23 -35 -27 -137 -9 -232 8
                        -47 19 -88 24 -93 5 -5 77 33 163 85 l154 93 3 102 c3 116 -5 159 -34 178 -17
                        12 -35 6 -153 -48z"
              />
              <path
                className={muscleGroupNames.abdominals}
                d="M2279 6511 c-19 -15 -23 -32 -30 -119 -4 -55 -4 -113 0 -129 6 -23
                        36 -45 160 -120 84 -51 156 -91 161 -88 29 18 47 278 21 324 -8 15 -54 42
                        -129 78 -162 76 -157 75 -183 54z"
              />
              <path
                className={muscleGroupNames.abdominals}
                d="M2060 6114 c-185 -99 -193 -107 -206 -223 -6 -54 -5 -59 15 -66 28
                        -8 260 -10 288 -1 27 9 31 26 32 170 1 92 -2 124 -14 142 -9 13 -19 24 -23 24
                        -4 0 -45 -21 -92 -46z"
              />
              <path
                className={muscleGroupNames.abdominals}
                d="M2257 6142 c-14 -15 -17 -42 -17 -153 0 -74 4 -140 9 -148 6 -9 34
                        -18 68 -22 66 -7 235 0 254 11 9 6 9 25 1 80 -8 56 -17 79 -37 100 -23 23
                        -239 150 -257 150 -3 0 -12 -8 -21 -18z"
              />
              <path
                className={muscleGroupNames.abdominals}
                d="M1943 5767 l-92 -20 -6 -39 c-9 -50 3 -151 20 -175 12 -15 33 -18
                        163 -21 l149 -4 6 23 c4 13 7 77 7 142 l0 117 -77 -1 c-43 -1 -119 -11 -170
                        -22z"
              />
              <path
                className={muscleGroupNames.abdominals}
                d="M2240 5663 c0 -71 4 -134 9 -142 7 -10 39 -13 154 -10 82 3 151 9
                        157 15 16 16 32 123 25 174 l-6 47 -103 21 c-57 12 -133 22 -169 22 l-67 0 0
                        -127z"
              />
              <path
                className={muscleGroupNames.abdominals}
                d="M1857 5463 c-10 -15 21 -274 49 -413 42 -212 94 -350 157 -412 33
                        -34 103 -65 115 -53 4 4 9 197 10 430 l4 423 -24 13 c-28 16 -302 26 -311 12z"
              />

              <path
                className={muscleGroupNames.abdominals}
                d="M2294 5461 c-17 -4 -36 -11 -42 -15 -9 -5 -12 -108 -12 -384 0 -375
                        5 -482 22 -482 4 0 28 9 53 21 109 51 194 279 239 644 8 66 16 143 18 170 l3
                        50 -125 2 c-69 1 -139 -2 -156 -6z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.forearms
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.forearms}
                d="M902 6011 c-20 -21 -63 -88 -95 -147 -55 -101 -60 -116 -69 -204 -9
                        -92 -68 -419 -108 -605 -27 -123 -42 -237 -33 -246 5 -4 33 -12 63 -17 30 -5
                        63 -13 73 -17 14 -6 26 13 76 116 32 68 80 173 107 233 26 60 75 159 109 220
                        73 133 165 340 165 371 0 12 -7 28 -15 35 -8 7 -24 31 -35 54 -23 50 -34 63
                        -83 99 -34 25 -64 74 -81 130 -9 27 -33 20 -74 -22z"
              />
              <path
                className={muscleGroupNames.forearms}
                d="M3435 5998 c-13 -29 -45 -75 -72 -102 -26 -27 -55 -62 -63 -77 -8
                        -15 -28 -43 -43 -63 l-29 -35 57 -133 c31 -73 76 -167 100 -208 63 -111 106
                        -199 170 -350 32 -74 71 -161 88 -193 26 -51 33 -58 51 -51 12 4 47 9 79 11
                        33 3 57 10 58 16 4 44 -10 130 -66 412 -35 176 -66 360 -70 409 -8 106 -14
                        124 -84 249 -56 100 -111 167 -137 167 -9 0 -25 -23 -39 -52z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.quadriceps
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.quadriceps}
                d="M1625 5018 c-9 -13 -27 -39 -40 -58 -42 -59 -112 -211 -135 -294 -33
                        -117 -50 -238 -50 -351 -1 -55 -5 -147 -10 -205 -7 -71 -7 -155 1 -260 19
                        -279 53 -459 108 -569 15 -31 45 -100 65 -153 21 -54 42 -98 46 -98 5 0 44 11
                        86 25 42 14 86 25 97 25 12 0 41 -19 64 -42 65 -63 76 -51 86 93 6 90 14 127
                        37 184 17 40 36 113 45 171 8 56 22 120 30 143 46 130 98 591 67 591 -4 0 -13
                        17 -19 38 -81 280 -227 554 -368 693 -36 35 -65 70 -65 77 0 20 -28 14 -45
                        -10z"
              />
              <path
                className={muscleGroupNames.quadriceps}
                d="M2704 4962 c-127 -125 -239 -313 -319 -537 -25 -71 -57 -151 -71
                        -178 -19 -38 -23 -57 -19 -100 3 -28 10 -101 15 -162 17 -171 86 -520 129
                        -650 28 -86 43 -153 47 -218 7 -101 12 -117 32 -117 10 0 29 11 42 25 24 26
                        59 40 126 49 34 5 48 1 80 -20 50 -34 62 -26 97 67 15 41 43 108 62 149 61
                        132 94 303 114 585 14 206 -4 575 -35 714 -25 112 -107 331 -123 331 -4 0 -27
                        29 -50 65 -24 36 -47 65 -51 65 -4 0 -38 -31 -76 -68z"
              />
            </g>
          </g>
        </svg>
      ) : (
        ""
      )}
      {view === "back" ? (
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 460.000000 897.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,897.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <g
              style={{ fill: "white", stroke: "black", strokeWidth: 10 + "px" }}
            >
              <path
                d="M2115 8774 c-179 -46 -230 -85 -266 -205 -18 -58 -21 -87 -17 -160 4
                            -71 2 -91 -9 -101 -12 -10 -14 -27 -10 -77 6 -76 62 -197 90 -195 14 2 17 -7
                            17 -41 0 -50 13 -89 36 -113 14 -13 16 -30 11 -99 -3 -46 -12 -95 -19 -110
                            -19 -40 -141 -138 -221 -178 l-70 -35 -131 2 -131 3 -63 -34 c-78 -43 -189
                            -157 -228 -237 l-29 -59 0 -250 -1 -250 -27 -57 c-35 -71 -57 -173 -57 -265 0
                            -71 -1 -73 -53 -146 -102 -142 -164 -294 -192 -469 -58 -365 -129 -680 -168
                            -752 -18 -33 -38 -48 -114 -86 -110 -55 -131 -74 -172 -150 -21 -40 -47 -70
                            -81 -94 -37 -26 -50 -42 -50 -61 0 -33 27 -46 73 -35 40 9 57 19 99 63 15 16
                            32 26 38 22 23 -14 6 -65 -64 -196 -89 -164 -91 -172 -71 -193 25 -25 43 -19
                            71 22 96 141 126 183 130 180 6 -6 -32 -125 -68 -210 -27 -66 -30 -81 -20
                            -103 16 -34 34 -31 71 10 36 41 57 81 96 183 16 39 30 71 31 69 2 -1 -3 -39
                            -11 -82 -17 -94 -19 -201 -5 -210 6 -3 19 -3 30 0 21 7 47 83 70 200 6 33 16
                            78 22 100 9 34 12 37 19 20 4 -11 8 -47 9 -80 1 -110 27 -172 58 -142 14 15
                            32 111 32 177 0 25 20 125 45 223 37 146 45 195 45 270 0 51 5 111 10 135 13
                            55 145 337 243 518 109 203 147 321 163 499 7 88 21 129 58 178 34 45 70 128
                            97 226 30 109 40 107 54 -9 10 -85 34 -168 63 -224 26 -50 27 -55 26 -226 0
                            -96 -8 -263 -18 -370 -15 -164 -23 -212 -52 -300 -46 -144 -71 -270 -100 -505
                            -20 -167 -24 -245 -24 -477 0 -437 27 -664 95 -804 41 -83 43 -117 19 -275
                            -10 -67 -14 -152 -12 -239 2 -104 -2 -158 -17 -235 -16 -83 -19 -140 -19 -330
                            1 -261 17 -395 81 -665 l36 -155 2 -290 1 -290 -77 -81 c-53 -55 -81 -93 -88
                            -120 -16 -56 -14 -75 9 -81 11 -3 20 -11 20 -19 0 -16 31 -34 58 -34 11 0 25
                            -7 32 -15 7 -8 27 -15 46 -15 18 0 36 -5 40 -11 4 -7 23 -9 48 -6 26 4 50 1
                            66 -8 38 -22 58 -18 91 18 51 54 62 83 56 151 -3 34 1 93 8 131 18 94 26 287
                            14 327 -23 80 -30 218 -19 384 14 210 31 309 72 415 l32 84 0 200 c1 160 -4
                            234 -23 370 l-24 170 29 80 c26 75 28 90 29 245 l1 165 76 320 c113 474 110
                            456 112 662 0 101 3 183 7 183 3 0 10 -5 16 -11 8 -8 17 -8 31 0 11 6 22 11
                            24 11 2 0 3 -82 4 -183 0 -206 -5 -175 110 -660 85 -356 85 -358 78 -455 -7
                            -114 6 -226 37 -300 l22 -52 -24 -168 c-19 -131 -24 -210 -24 -367 l0 -200 37
                            -110 c44 -130 55 -203 67 -413 9 -156 1 -305 -18 -372 -7 -24 -7 -79 0 -175 6
                            -77 14 -192 17 -255 7 -112 8 -116 41 -157 41 -52 62 -59 103 -39 20 10 43 14
                            64 10 18 -3 42 0 55 7 13 7 36 12 50 10 14 -1 31 5 39 13 7 9 23 16 36 16 23
                            0 54 23 54 41 0 5 6 9 14 9 23 0 27 32 12 85 -12 37 -32 66 -88 122 l-72 72
                            -3 278 -2 278 34 145 c78 329 107 621 87 873 -7 83 -19 181 -27 217 -11 48
                            -13 98 -9 190 4 90 1 154 -10 229 -23 150 -21 199 10 254 68 123 94 310 101
                            737 5 289 3 346 -16 515 -27 238 -64 434 -101 536 -15 43 -33 109 -39 146 -20
                            133 -43 490 -39 603 4 101 8 121 32 170 28 54 66 206 66 267 0 17 4 35 10 38
                            12 7 20 -12 54 -125 14 -47 41 -110 60 -140 19 -30 42 -67 51 -83 9 -15 22
                            -80 29 -146 21 -175 48 -263 133 -424 85 -164 189 -377 240 -492 33 -74 36
                            -90 44 -220 6 -106 15 -168 39 -255 34 -130 47 -200 56 -312 6 -83 27 -126 53
                            -109 17 11 30 82 30 168 1 61 14 90 25 56 3 -10 14 -61 25 -113 11 -52 28
                            -120 38 -150 15 -47 22 -55 43 -55 24 0 25 2 25 75 0 41 -4 102 -8 135 -6 49
                            -5 56 4 35 93 -198 127 -248 162 -234 31 12 29 48 -6 135 -29 69 -67 181 -67
                            196 0 15 29 -22 86 -108 69 -105 85 -119 109 -99 26 21 17 49 -60 196 -71 136
                            -87 185 -65 199 5 3 22 -7 37 -22 46 -47 76 -63 120 -63 32 0 43 4 48 19 9 28
                            -2 46 -50 80 -29 21 -55 53 -76 92 -40 74 -71 101 -178 152 -95 46 -110 64
                            -142 172 -34 111 -86 353 -108 503 -32 210 -40 252 -63 322 -28 89 -89 209
                            -154 303 -53 77 -54 80 -54 150 0 92 -22 194 -57 265 l-27 57 -1 245 0 246
                            -37 76 c-44 87 -144 190 -231 235 -50 27 -57 28 -181 25 -119 -2 -133 0 -184
                            23 -64 30 -164 99 -209 147 -23 24 -36 49 -43 87 -15 78 -13 147 5 165 22 22
                            35 62 35 111 0 33 3 43 14 39 29 -11 96 144 96 222 0 32 -5 47 -18 55 -16 10
                            -17 19 -10 67 19 119 -31 282 -100 328 -60 41 -150 65 -257 69 -55 2 -109 2
                            -120 -1z"
              />
            </g>
            <g
              style={{
                fill: "rgb(129, 24, 24)",
                stroke: "black",
                strokeWidth: 10 + "px",
              }}
            >
              <path
                d="M2120 8764 c-73 -14 -163 -50 -191 -78 -70 -68 -99 -200 -76 -337 10
                            -58 20 -87 32 -94 76 -44 103 -75 157 -174 l17 -31 154 0 154 0 28 53 c44 81
                            73 115 116 134 47 20 58 48 66 174 5 71 2 99 -16 158 -29 97 -72 141 -166 171
                            -68 21 -218 34 -275 24z"
              />
              =
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.traps
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.traps}
                d="M1761 7455 c-35 -8 -65 -16 -67 -18 -2 -2 14 -42 35 -88 22 -46 69
                            -182 106 -303 73 -242 94 -294 195 -476 38 -69 76 -145 85 -170 24 -71 25 -73
                            30 -68 7 7 33 377 40 573 6 179 -4 364 -25 437 -12 43 -72 90 -135 106 -73 19
                            -196 22 -264 7z"
              />
              <path
                className={muscleGroupNames.traps}
                d="M2457 7459 c-73 -10 -107 -24 -155 -64 -50 -42 -57 -93 -57 -400 0
                            -261 21 -651 35 -660 4 -2 14 19 23 48 9 29 37 88 62 132 130 232 140 256 260
                            640 26 83 62 178 80 213 38 73 39 73 -66 91 -73 12 -85 12 -182 0z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.lower_back
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.lower_back}
                d="M1301 7354 c-29 -15 -76 -50 -105 -78 -75 -73 -86 -112 -86 -303 0
                            -139 2 -153 18 -153 28 0 117 56 170 108 46 45 50 52 57 113 13 115 52 180
                            148 241 46 30 48 32 31 46 -74 56 -154 65 -233 26z"
              />
              <path
                className={muscleGroupNames.lower_back}
                d="M2976 7373 c-21 -6 -96 -51 -96 -57 0 -2 29 -25 64 -50 75 -54 114
                            -119 123 -211 3 -33 15 -70 27 -88 29 -42 127 -120 176 -140 l40 -15 2 116 c4
                            181 1 220 -22 268 -25 50 -111 133 -167 159 -39 19 -113 28 -147 18z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.lats
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.lats}
                d="M1670 7293 c-8 -3 -67 -30 -131 -60 l-117 -55 -18 -57 c-26 -78 -24
                            -195 6 -286 12 -38 28 -103 36 -144 8 -45 29 -107 53 -155 33 -66 42 -99 51
                            -176 6 -52 20 -133 31 -180 32 -136 59 -307 59 -371 0 -47 -6 -72 -31 -119
                            -40 -78 -54 -171 -41 -279 6 -45 13 -85 16 -89 4 -3 14 5 23 19 27 38 73 79
                            115 100 62 32 78 53 78 104 0 46 88 296 182 515 62 144 110 297 102 324 -4 11
                            -19 39 -34 61 -15 22 -55 101 -89 175 -34 74 -71 148 -82 163 -22 30 -28 49
                            -89 292 -56 223 -64 238 -120 218z"
              />
              <path
                className={muscleGroupNames.lats}
                d="M2696 7277 c-9 -12 -22 -54 -31 -92 -36 -157 -97 -362 -114 -385 -10
                            -14 -46 -88 -80 -165 -34 -77 -78 -163 -97 -191 -19 -28 -34 -62 -34 -77 0
                            -34 51 -184 105 -312 79 -184 176 -456 182 -509 7 -62 11 -67 78 -105 29 -17
                            70 -51 91 -76 23 -27 42 -41 47 -36 5 5 12 61 15 123 5 130 -9 196 -59 278
                            l-30 48 26 151 c14 83 34 189 45 235 11 46 27 133 35 194 12 90 20 121 49 173
                            19 35 42 98 51 139 10 41 27 102 38 135 26 71 30 217 9 307 -12 52 -18 60 -56
                            83 -55 32 -222 105 -241 105 -8 0 -21 -10 -29 -23z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.triceps
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.triceps}
                d="M1252 6845 c-71 -66 -115 -138 -142 -230 -7 -22 -18 -50 -26 -61 -16
                            -27 -49 -155 -63 -251 -15 -101 -14 -217 3 -256 23 -49 108 -139 126 -132 25
                            11 90 108 96 145 13 76 25 108 58 151 19 24 41 71 51 104 9 33 25 84 36 113
                            23 63 25 184 4 222 -7 14 -22 78 -32 143 -10 71 -22 117 -29 117 -6 0 -43 -29
                            -82 -65z"
              />
              <path
                className={muscleGroupNames.triceps}
                d="M3080 6904 c0 -31 -44 -258 -57 -292 -11 -28 -14 -58 -10 -91 9 -79
                            75 -261 118 -324 21 -33 39 -71 39 -86 0 -50 21 -99 61 -145 22 -25 45 -46 50
                            -46 5 0 21 14 36 32 16 18 42 46 59 64 41 42 49 98 35 229 -13 114 -47 276
                            -60 284 -5 3 -16 34 -25 69 -26 104 -87 197 -174 268 -51 41 -72 52 -72 38z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.triceps
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.triceps}
                d="M2104 6219 c-81 -131 -280 -640 -286 -730 l-3 -42 100 -64 c55 -35
                            109 -68 121 -72 11 -5 38 -21 59 -36 l40 -26 7 28 c28 98 26 615 -3 829 -14
                            108 -22 134 -35 113z"
              />
              <path
                className={muscleGroupNames.triceps}
                d="M2306 6222 c-20 -33 -46 -354 -46 -582 0 -159 15 -370 28 -382 6 -6
                            36 11 245 139 72 45 77 50 77 82 0 68 -133 422 -244 650 -51 105 -52 106 -60
                            93z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.forearms
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.forearms}
                d="M837 5903 c-18 -20 -29 -46 -36 -88 -95 -571 -144 -810 -172 -840 -5
                            -5 -9 -17 -9 -27 0 -15 9 -18 65 -18 105 0 114 12 303 393 88 177 173 355 188
                            395 34 91 29 99 -74 107 -89 7 -126 22 -171 69 -42 43 -59 45 -94 9z"
              />
              <path
                className={muscleGroupNames.forearms}
                d="M3497 5899 c-57 -55 -115 -83 -191 -91 -38 -4 -73 -11 -78 -16 -4 -4
                            14 -59 41 -122 62 -146 323 -665 348 -692 22 -25 54 -38 117 -49 70 -12 80 -1
                            57 59 -32 81 -70 252 -116 527 -25 147 -45 276 -45 288 0 29 -66 127 -85 127
                            -9 0 -30 -14 -48 -31z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.glutes
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.glutes}
                d="M1667 5340 c-91 -79 -167 -349 -147 -520 20 -175 130 -352 254 -409
                            150 -69 245 -86 311 -56 42 21 55 51 55 131 0 35 9 104 20 152 43 196 45 405
                            3 487 -23 43 -61 87 -97 109 -226 141 -329 168 -399 106z"
              />
              <path
                className={muscleGroupNames.glutes}
                d="M2590 5359 c-14 -6 -81 -42 -150 -81 -128 -72 -159 -103 -190 -183
                            -29 -76 -20 -324 15 -455 9 -30 18 -91 21 -135 8 -114 11 -123 47 -145 63 -39
                            185 -17 332 58 45 23 72 46 108 93 56 74 102 164 122 239 17 63 19 190 5 252
                            -5 24 -14 68 -20 98 -14 71 -71 189 -114 234 -31 34 -37 36 -92 35 -33 0 -70
                            -5 -84 -10z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.hamstrings
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.hamstrings}
                d="M1426 4573 c-17 -17 2 -482 30 -758 21 -216 48 -337 90 -413 l35 -63
                            -20 -127 c-11 -70 -23 -154 -26 -187 -4 -33 -9 -69 -12 -80 -4 -16 0 -14 24
                            10 17 17 37 44 46 60 31 60 88 93 141 79 29 -7 62 -55 100 -146 27 -64 52 -91
                            61 -65 5 16 32 162 39 212 3 22 11 99 16 170 6 72 22 180 36 240 14 61 32 148
                            40 194 9 47 19 92 24 102 12 22 65 263 80 362 20 136 7 148 -140 128 -48 -7
                            -109 -9 -134 -6 -80 12 -216 105 -345 236 -46 46 -74 63 -85 52z"
              />
              <path
                className={muscleGroupNames.hamstrings}
                d="M2932 4536 c-11 -18 -30 -41 -43 -50 -13 -9 -67 -48 -119 -87 -130
                            -95 -191 -114 -343 -105 -76 4 -113 3 -123 -5 -30 -24 -16 -139 50 -414 93
                            -390 115 -500 125 -636 13 -167 40 -349 53 -349 16 0 33 22 78 105 53 99 67
                            115 97 115 52 0 95 -36 158 -130 l37 -55 -7 65 c-4 36 -13 108 -21 160 -30
                            195 -30 185 3 248 33 63 57 142 72 242 23 147 42 411 48 663 l6 267 -26 0
                            c-18 0 -31 -9 -45 -34z"
              />
            </g>

            <g
              onClick={clickedMuscleGroup}
              className={`muscle_group ${
                muscleGroups.primary === muscleGroupNames.calves
                  ? "active"
                  : "inactive"
              }`}
            >
              <path
                className={muscleGroupNames.calves}
                d="M1623 2981 c-97 -137 -134 -259 -148 -486 -12 -199 29 -510 74 -567
                            15 -18 31 -22 103 -26 103 -5 146 7 188 54 40 46 84 136 100 203 23 96 -5 403
                            -50 552 -11 36 -42 113 -69 171 -27 57 -55 123 -62 146 -11 38 -15 42 -43 42
                            -27 -1 -38 -11 -93 -89z"
              />
              <path
                className={muscleGroupNames.calves}
                d="M2682 3054 c-12 -8 -22 -24 -22 -34 0 -10 -25 -72 -56 -137 -30 -65
                            -64 -149 -74 -186 -30 -108 -53 -314 -48 -445 4 -128 22 -183 88 -276 49 -68
                            80 -80 186 -73 49 3 97 9 106 12 21 8 42 65 65 175 14 66 18 134 18 305 0 238
                            -12 329 -60 447 -29 71 -143 228 -165 228 -8 0 -26 -7 -38 -16z"
              />
            </g>
          </g>
        </svg>
      ) : (
        ""
      )}
    </div>
  );
};

export default MuscleMap;

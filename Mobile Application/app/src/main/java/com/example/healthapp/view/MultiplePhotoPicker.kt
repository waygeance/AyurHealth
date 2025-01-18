package com.example.healthapp.view


import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.PickVisualMediaRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import coil.compose.AsyncImage
import android.content.Context
import androidx.compose.material3.ButtonDefaults
import androidx.compose.ui.platform.LocalContext


// Your custom colors


@Composable
fun MultiplePhotoPicker() {
    val context = LocalContext.current

    var imageUris by remember {
        mutableStateOf<List<Uri>>(emptyList())
    }
    var randomText by remember { mutableStateOf("") }

    val multiplePhotoPicker = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.PickMultipleVisualMedia(),
        onResult = {
            imageUris = it
        }
    )

    // Use LazyColumn for scrollable content
    LazyColumn(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            // Pick Image Button
            Button(
                onClick = {
                    multiplePhotoPicker.launch(
                        PickVisualMediaRequest(ActivityResultContracts.PickVisualMedia.ImageOnly)
                    )
                },
                modifier = Modifier.fillMaxWidth(),
                contentPadding = PaddingValues(vertical = 12.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Green)
            ) {
                Text("Pick Multiple Images", color = Color.White)
            }
        }

        // Display images
        items(imageUris) { uri ->
            AsyncImage(model = uri, contentDescription = null, modifier = Modifier.size(248.dp))
        }

        item {
            // Upload Button
            Button(
                onClick = {
                    // List of possible texts
                    val texts = listOf(
                        "Skin Tone Analysis (HSV):\n\n" +
                                "Hue (15.23): This hue value suggests a skin tone in the light peach to light tan range. It is a general observation and does not indicate any specific health issues.\n" +
                                "Saturation (45.67): A moderate saturation level indicates a more subdued skin color. This is not inherently indicative of any health problems.\n" +
                                "Value (180.45): This brightness value suggests a relatively light skin tone, indicating a fair complexion.\n" +
                                "LBP Histogram: The histogram shows a concentration of values in the lower bins (indices 1-3), suggesting a smooth skin texture with minimal complex features.\n\n" +
                                "Average Under-Eye Intensity (85.34): This value is slightly lower than the midpoint of the typical intensity range, which might suggest some darkness under the eyes.\n\n" +
                                "Recommendations:\nVisual Inspection: A visual examination of the face is essential for a proper assessment.",
                        "Skin Tone Analysis (HSV):\n\n" +
                                "Hue (45.67): This hue value indicates a skin tone in the light tan to olive range. It is a general observation and not indicative of any specific health issues.\n" +
                                "Saturation (30.12): A lower saturation suggests a more muted skin color.\n" +
                                "Value (200.89): This brightness value suggests a very light skin tone.\n" +
                                "LBP Histogram: The histogram shows a concentration of values in the middle bins (indices 3-5), suggesting a relatively smooth skin texture.\n\n" +
                                "Average Under-Eye Intensity (120.56): This value suggests puffiness under the eyes, possibly due to allergies or fluid retention.",
                        "Skin Tone Analysis (HSV):\n\n" +
                                "Hue (60.89): This hue value suggests a skin tone in the olive to light brown range.\n" +
                                "Saturation (55.78): A moderate saturation level indicates a vibrant skin color.\n" +
                                "Value (140.67): This brightness value suggests a medium-light skin tone.\n" +
                                "LBP Histogram: The histogram shows a concentration of values in the higher bins (indices 5-7), suggesting a slightly more textured skin surface.\n\n" +
                                "Average Under-Eye Intensity (95.23): This value suggests mild darkness under the eyes.\n\n" +
                                "Recommendations: Visual Inspection: A visual examination of the face is essential for a proper assessment.",
                        "Insufficient Data: Please upload a clear picture."
                    )

                    // Randomly select a text
                    randomText = texts.random()
                },
                modifier = Modifier.fillMaxWidth(),
                contentPadding = PaddingValues(vertical = 12.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Green)
            ) {
                Text("Upload", color =Color. White)
            }
        }

        item {
            // Display the randomly selected text below the button
            if (randomText.isNotEmpty()) {
                Text(text = randomText, modifier = Modifier.padding(top = 16.dp))
            }
        }
    }
}
